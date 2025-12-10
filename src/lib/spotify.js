import { getAccessToken } from './auth'
import { getTrackById } from './tracks'

const formatTrack = (track) => ({
    id: track.id,
    name: track.name,
    popularity: track.popularity,
    image: track.album?.images?.[0]?.url,
    year: track.album?.release_date?.split('-')[0],
    uri: track.uri,
    artists: track.artists?.map(artist => ({
        name: artist.name,
        id: artist.id
    }))
})

export async function generatePlaylist(preferences) {
    const { artists, genres, decades, popularity, favorites } = preferences
    const token = await getAccessToken()
    let allTracks = []

    for (const artistId of artists) {
        const url = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=ES`
        const res = await fetch(url, { headers: { 'Authorization': `Bearer ${token}` } })
        const data = await res.json()
        if (data.tracks) allTracks.push(...data.tracks)
    }

    if (genres) {
        for (const genreObj of genres) {
            if (!genreObj) continue
            const genreName = genreObj.genre
            const url = `https://api.spotify.com/v1/search?q=genre:${genreName}&type=track&limit=20`
            const res = await fetch(url, { headers: { 'Authorization': `Bearer ${token}` } })
            const data = await res.json()
            if (data.tracks) allTracks.push(...data.tracks.items)
        }
    }

    if (decades.length > 0) {
        allTracks = allTracks.filter(track => {
            const year = new Date(track.album.release_date).getFullYear()
            return decades.some(decade => {
                const decadeStart = parseInt(decade)
                return year >= decadeStart && year < decadeStart + 10
            })
        })
    }

    if (popularity) {
        const [min, max] = popularity
        allTracks = allTracks.filter(
            track => track.popularity >= min && track.popularity <= max
        )
    }

    let playlistTracks = allTracks.map(formatTrack)

    if (favorites && favorites.length > 0) {
        const favoritePromises = favorites.map(id => getTrackById(id))
        const rawFavorites = await Promise.all(favoritePromises)

        const cleanFavorites = rawFavorites.map(formatTrack)

        playlistTracks = [...cleanFavorites, ...playlistTracks]
    }

    const uniqueTracks = Array.from(
        new Map(playlistTracks.map(track => [track.id, track])).values()
    ).slice(0, 30)

    return uniqueTracks
}
