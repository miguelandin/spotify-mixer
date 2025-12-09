"use client";

import { useEffect, useState } from "react";
import { getTracksByName } from "@/lib/tracks";
import TrackImg from "../components/TrackImg";

export default function DashBoardPage() {
    const [track, setTrack] = useState(null)
    const [loading, setLoading] = useState(true)

    const trackName = "Uptown"
    useEffect(() => {
        const loadTrack = async () => {
            const foundTrack = await getTracksByName(trackName)
            setTrack(foundTrack?.[0] || null)
            setLoading(false)
        }

        loadTrack()
    }, [trackName])

    if (loading)
        return <div className="p-4">Loading...</div>
    else
        return <TrackImg track={track} />
}
