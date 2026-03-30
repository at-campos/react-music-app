import React, { useState } from "react";
import Song from "./Song";

const Library = () => {
    const [songs, setSongs] = useState([]);

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