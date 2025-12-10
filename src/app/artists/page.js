"use client";

import { getLoadedList, ARTISTS_KEY } from "@/lib/storage"
import { useEffect, useState } from "react"
import ObjectsList from "../components/ObjectList"
import SearchArtistBar from "../components/SearchArtistBar";

export default function Artists() {
    const [artists, setArtists] = useState([])

    useEffect(() => {
        const loadArtists = async () => {
            const data = await getLoadedList(ARTISTS_KEY)
            setArtists(data)
        }

        loadArtists()
    }, [])

    return (<>
        <SearchArtistBar />
        <ObjectsList objects={artists} name={"Favorite Artists"} type={ARTISTS_KEY} />
    </>)
}
