import Song from "./Song";

const Library = () => {
    const songs = [
        {id: 1, title:"Discipline", artist: "Nine Inch Nails", duration: "3:00"},
        {id: 2, title:"Discipline", artist: "Nine Inch Nails", duration: "3:00"},
        {id: 3, title:"Discipline", artist: "Nine Inch Nails", duration: "3:00"}
    ];

    return(
        <>
            <section className="library">
                <h2 className="library__title">Biblioteca</h2>
                <>{
                    songs.map((song) => {
                        const { id, title, artist, duration } = song;

                        return(
                            <Song id= {id} title={title} artist= {artist} duration={duration} />
                        )
                    })
                }
                </>
            </section>
        </>
        
        
    )
}

export default Library;