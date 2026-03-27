import './App.css';
import Header from "./components/Header";
import Library from './components/Library';
import SearchResults from './components/SearchResults';
import Song from './components/Song';

function App() {
  return (
    <div className="App">
      <Header appName="Music App" />
      <div className="App__container">
        <SearchResults />
        <Library />
      </div>
      
    </div>
  );
}

export default App;
