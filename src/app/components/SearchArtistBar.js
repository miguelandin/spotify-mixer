import { getArtistByName } from "@/lib/artists"
export default function SearchArtistBar() {
    const [UserInput, setUserInput] = useSate(null)

    const handleChange = (event) => { // remember userInput
        setUserInput(event.target.value)
        const getArtists = async () => {
            const artists = getArtistByName(UserInput)
        }
        getArtists()
    }

    return (
        <div className="">
            <input
                type="text"
                value={UserInput}
                onChange={handleChange}
                placeholder="Search artists..."
            />
            {artists.map(artist => (a))}
        </div>
    )
}
