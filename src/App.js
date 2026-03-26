import './App.css';
import Header from "./components/Header";
import Song from './components/Song';

function App() {
  return (
    <div className="App">
      <Header appName="Music App" />
      <Song title={'Canción'} artist= {'Trent Reznor'} duration={'4:50'} />
      <Song title={'Canción'} artist= {'Trent Reznor'} duration={'4:50'} />
      <Song title={'Canción'} artist= {'Trent Reznor'} duration={'4:50'} />
    </div>
  );
}

export default App;
