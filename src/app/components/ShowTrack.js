import TrackInfo from "./TrackInfo.js"
import TrackImg from "./TrackImg.js"

export default function ShowTrack({ track }) {
    return (
        <div
            className="flex flex-row items-center p-4 rounded-xl shadow-2xl backdrop-blur-md w-[90vw] mt-1.5"

            style={{
                backgroundColor: 'rgba(50, 50, 50, 0.5)',
            }}
        >
            <TrackImg track={track} />

            <div className="ml-4">
                <TrackInfo track={track} />
            </div>
        </div>
    )
}
