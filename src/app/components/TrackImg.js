'use client';
import { useEffect, useState } from 'react';
import { getTrackById } from '@/lib/tracks';

export default function TrackImg(track) {
    const [imageUrl, setImageUrl] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let isMounted = true

        const fetchTrackImage = async () => {
            try {
                setImageUrl(track.image)
            } catch (error) {
                console.error("Error al obtener imagen:", error)
            } finally {
                if (isMounted) setLoading(false)
            }
        }

        if (id) {
            fetchTrackImage()
        }

        return () => { isMounted = false }
    }, [track])

    if (loading) return <div className="w-[150px] h-[150px] bg-gray-200 animate-pulse rounded-md" />

    if (!imageUrl) return <div className="w-[150px] h-[150px] bg-gray-300 flex items-center justify-center rounded-md">?</div>

    return (
        <img
            src={imageUrl}
            alt="Track Cover"
            className="w-[150px] h-[150px] object-cover rounded-md shadow-lg hover:scale-105 transition-transform"
        />
    )
}
