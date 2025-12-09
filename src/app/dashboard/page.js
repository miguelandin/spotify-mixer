"use client";

import { useEffect, useState } from "react";
import { getTracksByName } from "@/lib/tracks";
import ShowTrack from "../components/ShowTrack";
import { getArtistsByName } from "@/lib/artists";
import ArtistInfo from "../components/ArtistInfo";
import ShowArtist from "../components/ShowArtist";

export default function DashBoardPage() {
    const [track, setTrack] = useState(null)
    const [loading, setLoading] = useState(true)

    const trackName = "Steve Lazy"
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
        return (<ShowArtist artist={track} />)
}
