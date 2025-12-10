"use client";

import { useEffect, useState } from "react";
import { getTracksByName } from "@/lib/tracks";
import ShowTrack from "../components/ShowTrack";
import { getArtistsByName } from "@/lib/artists";
import ArtistInfo from "../components/ArtistInfo";
import ShowArtist from "../components/ShowArtist";
import SearchArtistBar from "../components/SearchArtistBar";
import SearchTrackBar from "../components/SearchTrackBar";

export default function DashBoardPage() {
    const [track, setTrack] = useState(null)
    const [loading, setLoading] = useState(true)

    const trackName = "albert einstein"
    useEffect(() => {
        const loadTrack = async () => {
            const foundTrack = await getArtistsByName(trackName)
            setTrack(foundTrack?.[0] || null)
            setLoading(false)
        }

        loadTrack()
    }, [trackName])

    if (loading)
        return <div className="p-4">Loading...</div>
    else
        return (<>
            <SearchTrackBar />
            <SearchArtistBar /></>)
}
