"use client";

export default function PopularitySelector({ popularity, setPopularity }) {
    const [min, max] = popularity || [0, 100]

    const handleMinChange = (e) => {
        const newVal = parseInt(e.target.value)
        if (newVal <= max) {
            setPopularity([newVal, max])
        }
    }

    const handleMaxChange = (e) => {
        const newVal = parseInt(e.target.value)
        if (newVal >= min) {
            setPopularity([min, newVal])
        }
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <span className="text-xs text-green-400 font-mono bg-green-400/10 px-2 py-1 rounded">
                    {min}% - {max}%
                </span>
            </div>

            <div className="space-y-4 bg-slate-900/50 p-4 rounded-xl border border-white/5">

                <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-500 flex justify-between">
                        <span>Min: {min}</span>
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={min}
                        onChange={handleMinChange}
                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-500 flex justify-between">
                        <span>Max: {max}</span>
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={max}
                        onChange={handleMaxChange}
                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                    />
                </div>

            </div>
        </div>
    )
}
