'use client';

import TrackImg from "../components/TrackImg";
import { getGenreByName, getGenreByIndex, getAllGenres } from "@/lib/genres";
export default function DashBoardPage() {
    console.log(getGenreByName("heavymetal"))
    return (<>
        <TrackImg id="42a9PusvgFnyH0WgdCn6PV" />
        <TrackImg id="11dFghVXANMlKmJXsNCbNl" />
    </>
    );
}
