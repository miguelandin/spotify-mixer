export default function SearchArtistBar() {
    const [UserInput, setUserInput] = useSate('')

    const handleChange = (event) => { // remember userInput
        setUserInput(event.target.value)
    }

    return (
        <div className="searchZone">
            <input
                type="text"
                className="searcBar"
                value={UserInput}
                onChange={handleChange}
                placeholder="Search artists..."
            />
        </div>
    )
}
