import { getAccessToken } from './auth'

export async function generatePlaylist(preferences) {
    const { artists, genres, decades, popularity } = preferences;
    const token = await getAccessToken();
    let allTracks = [];

    for (const artistId of artists) {
        const tracks = await fetch(
            `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=ES`,
            {
                headers: { 'Authorization': `Bearer ${token}` }
            }
        );
        const data = await tracks.json();
        if (data.tracks) allTracks.push(...data.tracks);
    }

    for (const genreObj of genres) {
        if (!genreObj) continue;

        const genreName = genreObj.genre;

        const results = await fetch(
            `https://api.spotify.com/v1/search?q=genre:${genreName}&type=track&limit=20`,
            {
                headers: { 'Authorization': `Bearer ${token}` }
            }
        );
        const data = await results.json();
        if (data.tracks) allTracks.push(...data.tracks.items);
    }

    if (decades.length > 0) {
        allTracks = allTracks.filter(track => {
            const year = new Date(track.album.release_date).getFullYear();
            return decades.some(decade => {
                const decadeStart = parseInt(decade);
                return year >= decadeStart && year < decadeStart + 10;
            });
        });
    }

    if (popularity) {
        const [min, max] = popularity;
        allTracks = allTracks.filter(
            track => track.popularity >= min && track.popularity <= max
        );
    }

    const uniqueTracks = Array.from(
        new Map(allTracks.map(track => [track.id, track])).values()
    ).slice(0, 30);


    const playlist = uniqueTracks.map(track => ({
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
    }))

    console.log(playlist)

    return playlist
}
