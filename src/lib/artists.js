import { getAccessToken } from "@/lib/auth.js";

export async function getArtistsByName(userIn) {
    const token = await getAccessToken()

    const result = await fetch(
        `https://api.spotify.com/v1/search?q=${userIn}&type=artist&market=ES&limit=5`,
        {
            headers: { 'Authorization': `Bearer ${token}` }
        }
    )
    const data = await result.json()

    const artists = data.artists.items.map(artist => ({
        id: artist.id,
        name: artist.name,
        image: artist.images?.[0]?.url,
        genres: artist.genres,
        popularity: artist.popularity,
        uri: artist.uri
    }))

    return artists
}

export async function getArtistById(id) {
    const token = await getAccessToken()

    const result = await fetch(
        `https://api.spotify.com/v1/artists/${id}`,
        {
            headers: { 'Authorization': `Bearer ${token}` }
        }
    )
    const data = await result.json()

    const artist = {
        id: data.id,
        name: data.name,
        image: data.images?.[0]?.url,
        genres: data.genres,
        popularity: data.popularity,
        uri: data.uri
    }

    return artist
}

export async function getYourTopArtists() {
    const token = await getAccessToken()

    // obtain the artists
    const result = await fetch(
        `https://api.spotify.com/v1/me/top/artists?limit=5`,
        {
            headers: { 'Authorization': `Bearer ${token}` }
        }
    )
    const data = await result.json()

    const artists = data.items.map(artist => ({
        id: artist.id,
        name: artist.name,
        image: artist.images?.[0]?.url,
        genres: artist.genres,
        popularity: artist.popularity,
        uri: artist.uri
    }))

    return artists
}
