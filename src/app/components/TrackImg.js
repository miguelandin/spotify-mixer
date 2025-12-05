'use client';

import { useEffect, useState } from 'react'
import { getTrackById } from '@/lib/tracks'

// return <img> with the track cover passed by id
export default function TrackImg({ id }) {
    const [track, setTrack] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchTrack = async () => {
            try {
                const trackData = await getTrackById(id)
                setTrack(trackData)
            } catch (err) {
                setError(err.message || 'Error fetching track')
                console.error('Error:', err)
            } finally {
                setLoading(false)
            }
        }

        fetchTrack()
    }, [id])

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>
    if (!track) return <div>No track found</div>


    return (
        !track?.album?.images?.[0]?.url ?
            <h1>imgNotFound</h1> :
            <img
                src={track.album.images[0].url}
                alt={track.name || 'Track image'}
            />
    )
}
