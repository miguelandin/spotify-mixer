"use client";

import { getTrackById } from "./tracks";
import { getArtistById } from "./artists";

export const TRACKS_KEY = "tracks"
export const ARTISTS_KEY = "artists"

export function saveObject(object, key) {
    if (typeof window === "undefined") return;

    const oldObjectList = localStorage.getItem(key)
    let objectList = oldObjectList ? JSON.parse(oldObjectList) : [] // converts the string to an object

    if (!objectList.includes(object.id))
        objectList.push(object.id)

    localStorage.setItem(key, JSON.stringify(objectList)) // convert the object to string and saves it in LS
}

export function deleteObject(object, key) {
    if (typeof window === "undefined") return;

    const oldObjectList = localStorage.getItem(key)
    if (!oldObjectList) return;

    let objectList = JSON.parse(oldObjectList)
    objectList = objectList.filter((item) => item !== object.id)

    localStorage.setItem(key, JSON.stringify(objectList))
}

export function isOnStorage(object, key) {
    if (typeof window === "undefined") return;

    const objectListString = localStorage.getItem(key)
    let objectList = objectListString ? JSON.parse(objectListString) : []

    if (objectList.includes(object.id))
        return true
    else
        return false
}

export function getList(key) {
    if (typeof window === "undefined") return [];

    const objectList = localStorage.getItem(key)

    return objectList ? JSON.parse(objectList) : []
}

export async function getLoadedList(key) {
    const ids = getList(key);

    if (!ids || ids.length === 0) return [];

    let searchFn;

    if (key === TRACKS_KEY) searchFn = getTrackById;
    else if (key === ARTISTS_KEY) searchFn = getArtistById;
    else return [];

    const promises = ids.map(id => searchFn(id));

    const loadedList = await Promise.all(promises);
    return loadedList;
}
