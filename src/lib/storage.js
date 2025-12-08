"use client";

export const STORAGE_KEY = "tracks"

export function saveTrack(id) {
    if (typeof window === "undefined") return;

    const oldTrackList = localStorage.getItem(STORAGE_KEY)
    let trackList = oldTrackList ? JSON.parse(oldTrackList) : [] // converts the string to an object

    if (!trackList.includes(id)) // to evade duplicates
        trackList.push(id)

    localStorage.setItem(STORAGE_KEY, JSON.stringify(trackList)) // convert the object to string and saves it in LS
}

export function deleteTrack(id) {
    if (typeof window === "undefined") return;

    const oldTrackList = localStorage.getItem(STORAGE_KEY)
    if (!oldTrackList) return;

    let trackList = JSON.parse(oldTrackList)
    trackList = trackList.filter((item) => item !== id)

    localStorage.setItem(STORAGE_KEY, JSON.stringify(trackList))
}

export function getTracks() { // returns all the tracks in localStorage
    if (typeof window === "undefined") return [];

    const trackList = localStorage.getItem(STORAGE_KEY)

    return trackList ? JSON.parse(trackList) : []
}
