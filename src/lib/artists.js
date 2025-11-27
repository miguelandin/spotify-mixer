import { getAccessToken } from "@/lib/auth.js";

export async function getArtistByName(userIn){ // return the artist you search
	const token = getAccessToken();

	// obtain the artis
	const result = await fetch(
		`https://api.spotify.com/v1/search?q=${userIn}&type=artist&market=ES&limit=1`,
		{
			headers: { 'Authorization': `Bearer ${token}` }
		}
	);
	const artist = await result.json();
	return artist
}

export async function getArtistId(){
}