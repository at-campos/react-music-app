import './App.css';
import Header from "./components/Header";
import Library from './components/Library';
import SearchResults from './components/SearchResults';
import Song from './components/Song';
import React, { useState, useEffect } from "react";

function App() {
  //Resultados del fetch - conecta a SearchResults.js
  const [results, setResults] = useState([]);
  //Guardado en Library.js
  const [songs, setSongs] = useState([]);

  useEffect(() => {
        const fetchSongs = async () => {
            const response = [   
                {id: 1, title:"Discipline", artist: "Nine Inch Nails", duration: "3:00"},
                {id: 2, title:"Remember the Name", artist: "Fort Minor", duration: "3:00"},
                {id: 3, title:"Discipline", artist: "Nine Inch Nails", duration: "3:00"}
            ];

            setResults(response);
        }

        const tempPopulate = () => {
          const placeholder = [
                {id: 4, title:"a", artist: "asddfs", duration: "3:00"},
                {id: 5, title:"xzcv", artist: "sdfsd", duration: "3:00"},
                {id: 6, title:"czvcxz", artist: "hgjg", duration: "3:00"}
          ];

          setSongs(placeholder);
        }
        fetchSongs();
        tempPopulate();
        
    }, [])

  return (
    <div className="App">
      <Header appName="Music App" />
      <div className="App__container">
        <SearchResults results={[...results]}/>
        <Library songs={[...songs]}/>
      </div>
      
    </div>
  );
}

export default App;
