'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated, getSpotifyAuthUrl } from '@/lib/auth';

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            if (await isAuthenticated()) {
                router.push('/dashboard');
            }
        };
        checkAuth();
    }, [router]);

    const handleLogin = () => {
        window.location.href = getSpotifyAuthUrl();
    };

    return (
        <>
            🎵 Spotify Taste Mixer
            <button onClick={handleLogin}>Login</button>
        </>
    );
}


