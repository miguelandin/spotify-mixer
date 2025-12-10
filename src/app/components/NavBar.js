"use client";

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { logout } from "@/lib/auth"

export default function Navbar() {
    const pathname = usePathname()
    const router = useRouter()

    if (pathname === "/")
        return null

    const navLinks = [
        { name: "Tracks", href: "/tracks" },
        { name: "Artists", href: "/artists" },
    ]

    const handleLogout = () => {
        logout()
        router.push("/")
    }

    return (
        <nav className="sticky top-0 z-50 w-full bg-black/50 backdrop-blur-lg border-b border-white/10">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold text-white tracking-wider hover:opacity-80 transition-opacity">
                            SPOTIFY<span className="text-green-500">MIXER</span>
                        </Link>
                    </div>

                    <div className="flex items-center space-x-8">
                        <div className="flex space-x-6">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`text-sm font-medium transition-colors duration-300 ${isActive
                                            ? "text-green-400 border-b-2 border-green-400 pb-1"
                                            : "text-gray-400 hover:text-white pb-1"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                )
                            })}
                        </div>

                        <div className="h-6 w-px bg-gray-700"></div>

                        <button
                            onClick={handleLogout}
                            className="text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 px-3 py-1.5 rounded-md transition-all duration-300 flex items-center gap-2"
                        >
                            <span>Exit</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    )
}
