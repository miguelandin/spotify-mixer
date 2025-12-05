import { getAccessToken } from "@/lib/auth.js";

export async function getArtistsByName(userIn) { // return the artists you search
    const token = getAccessToken();

    // obtain the artists
    const result = await fetch(
        `https://api.spotify.com/v1/search?q=${userIn}&type=artist&market=ES&limit=5`,
        {
            headers: { 'Authorization': `Bearer ${token}` }
        }
    );
    const artists = await result.json();
    return artists
}

export async function getArtistById(id) {
    const token = getAccessToken();

    //obtain the artist
    const result = await fetch(
        `https://api.spotify.com/v1/artists/${id}`,
        {
            headers: { 'Authorization': `Bearer ${token}` }
        }
    );
    const artist = await result.json();
    return artist;
}

export async function getYourTopArtists() { // get your top 5 most listened artist
    const token = getAccessToken();

    // obtain the artists
    const result = await fetch(
        `https://api.spotify.com/v1/me/top/artists?limit=5`,
        {
            headers: { 'Authorization': `Bearer ${token}` }
        }
    );
    const artists = await result.json();
    return artists
}
