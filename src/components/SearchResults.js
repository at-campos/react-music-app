import React, { useState, useEffect } from "react";
import Song from "./Song";

const SearchResults = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const fetchSongs = async () => {
            const response = [   
                {id: 1, title:"Discipline", artist: "Nine Inch Nails", duration: "3:00"},
                {id: 2, title:"Discipline", artist: "Nine Inch Nails", duration: "3:00"},
                {id: 3, title:"Discipline", artist: "Nine Inch Nails", duration: "3:00"}
            ];

            setSongs(response);
        }

        fetchSongs();
    }, [])

    return(
        <section className="searchResults">
            <h2 className="searchResults__title">Resultados de búsqueda</h2>
            {
            songs.map((song) => {
                const { id, title, artist, duration } = song;

                return(
                    <Song id= {id} title={title} artist= {artist} duration={duration} />
                )
            })
        }
        </section>
    )
}

export default SearchResults;