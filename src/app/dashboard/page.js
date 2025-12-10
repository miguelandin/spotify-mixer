"use client";

import { useEffect, useState } from "react";
import { getTracksByName, getTrackById } from "@/lib/tracks";
import ShowTrack from "../components/ShowTrack";
import { getArtistsByName } from "@/lib/artists";
import ArtistInfo from "../components/ArtistInfo";
import ShowArtist from "../components/ShowArtist";
import SearchArtistBar from "../components/SearchArtistBar";
import SearchTrackBar from "../components/SearchTrackBar";
import { generatePlaylist } from "@/lib/spotify";
import { getList, ARTISTS_KEY, TRACKS_KEY, getLoadedList } from "@/lib/storage";
import { getAllGenres, getGenreByName } from "@/lib/genres";
import ObjectsList from "../components/ObjectList";

export default function DashBoardPage() {
    const [playList, setPlaylist] = useState([])
    const [favorites, setFavorites] = useState([])

    const preferences = {
        artists: getList(ARTISTS_KEY),
        genres: [getGenreByName("j-pop"), getGenreByName("j-rock")],
        decades: [1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020],
        popularity: [0, 100]
    }

    useEffect(() => {
        const loadTracks = async () => {
            const data = await generatePlaylist(preferences)
            const data2 = await getLoadedList(ARTISTS_KEY)
            setFavorites(data2)
            setPlaylist(data)
        }

        loadTracks();
    }, [])

    return <ObjectsList objects={favorites} name={"hello"} type={ARTISTS_KEY} />
}
