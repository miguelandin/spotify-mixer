'use client';

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { isAuthenticated, getSpotifyAuthUrl } from '@/lib/auth'

export default function Home() {
    const router = useRouter()

    useEffect(() => {
        const checkAuth = async () => {
            if (await isAuthenticated()) {
                router.push('/dashboard')
            }
        }
        checkAuth()
    }, [router])

    const handleLogin = () => {
        window.location.href = getSpotifyAuthUrl()
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 p-4 text-center">

            <div className="space-y-8">
                <h1 className="text-5xl font-extrabold text-white tracking-tight animate-pulse">
                    🎵 Spotify Taste Mixer
                </h1>

                <button
                    onClick={handleLogin}
                    className="
                        bg-green-500 text-black font-bold text-xl
                        px-10 py-4 rounded-full
                        transition-all duration-300 transform hover:scale-105 hover:bg-green-400
                        shadow-[0_0_20px_rgba(34,197,94,0.5)] 
                    "
                >
                    Login with Spotify
                </button>
            </div>

        </main>
    )
}
