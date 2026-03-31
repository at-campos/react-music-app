import React, { useState, useEffect } from "react";
import Song from "./Song";

const SearchResults = ({results}) => {

    return(
        <section className="searchResults">
            <h2 className="searchResults__title">Resultados de búsqueda</h2>
            {
            results.map((results) => {
                const { id, title, artist, duration } = results;

                return(
                    <Song key={id} title={title} artist= {artist} duration={duration} addButton={Boolean(true)}/>
                )
            })
        }
        </section>
    )
}

export default SearchResults;