import { getAccessToken } from "@/lib/auth.js";

export async function getTracksByName(userIn) {
    const token = await getAccessToken()

    const result = await fetch(
        `https://api.spotify.com/v1/search?q=${userIn}&type=track&market=ES&limit=5`,
        {
            headers: { 'Authorization': `Bearer ${token}` }
        }
    )
    const data = await result.json()

    const tracks = data.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        popularity: track.popularity,
        image: track.album?.images?.[0]?.url,
        year: track.album?.release_date?.split('-')[0],
        artists: track.artists?.map(artist => ({
            artist_name: artist.name,
            artist_id: artist.id
        }))
    }))

    return tracks
}

export async function getTrackById(id) {
    const token = await getAccessToken()

    const result = await fetch(
        `https://api.spotify.com/v1/tracks/${id}`,
        {
            headers: { 'Authorization': `Bearer ${token}` }
        }
    )
    const data = await result.json()

    const track = {
        id: data.id,
        name: data.name,
        popularity: data.popularity,
        image: data.album?.images?.[0]?.url,
        year: data.album?.release_date?.split('-')[0],
        artists: data.artists?.map(artist => ({
            artist_name: artist.name,
            artist_id: artist.id
        }))
    }

    return track
}

export async function getYourTopTracks() {
    const token = await getAccessToken()

    const result = await fetch(
        `https://api.spotify.com/v1/me/top/tracks?limit=5`,
        {
            headers: { 'Authorization': `Bearer ${token}` }
        }
    )
    const data = await result.json()

    const tracks = data.items.map(track => ({
        id: track.id,
        name: track.name,
        popularity: track.popularity,
        image: track.album?.images?.[0]?.url,
        year: track.album?.release_date?.split('-')[0],
        artists: track.artists?.map(artist => ({
            artist_name: artist.name,
            artist_id: artist.id
        }))
    }))

    return tracks
}
