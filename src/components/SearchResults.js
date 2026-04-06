import React, { useState, useEffect } from "react";
import Song from "./Song";

const SearchResults = ({results, songs, setSongs, duplicateHandler}) => {

    const setHandler = (songKey) => {
        for (let song of results){
            if(!duplicateHandler(songKey)){
                if(song.id === songKey){
                    setSongs([...songs.concat(song)])
                }
            }
        }
        //esto podria hacerse con un reduce tambien...
        
    }

    return(
        <section className="searchResults">
            <h2 className="searchResults__title">Resultados de búsqueda</h2>
            {
            results.map((results) => {
                const { id, title, artist, duration } = results;

                return(
                    <Song key={id} id={id} title={title} artist= {artist} duration={duration} addButton={Boolean(true)} setHandler={setHandler}/>
                )
            })
        }
        </section>
    )
}

export default SearchResults;