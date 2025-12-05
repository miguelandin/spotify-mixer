import { getAccessToken } from "@/lib/auth.js";

export async function getTracksByName(userIn) { // return the tracks you search
    const token = getAccessToken();

    // obtain the track
    const result = await fetch(
        `https://api.spotify.com/v1/search?q=${userIn}&type=track&market=ES&limit=5`,
        {
            headers: { 'Authorization': `Bearer ${token}` }
        }
    );
    const tracks = await result.json();
    return tracks
}

export async function getTrackById(id) {
    const token = getAccessToken();

    //obtain the track
    const result = await fetch(
        `https://api.spotify.com/v1/tracks/${id}`,
        {
            headers: { 'Authorization': `Bearer ${token}` }
        }
    );
    const track = await result.json();
    return track;
}

export async function getYourTopTracks() { // get your top 5 most listened tracks
    const token = getAccessToken();

    // obtain the tracks
    const result = await fetch(
        `https://api.spotify.com/v1/me/top/tracks?limit=5`,
        {
            headers: { 'Authorization': `Bearer ${token}` }
        }
    );
    const tracks = await result.json();
    return tracks
}
