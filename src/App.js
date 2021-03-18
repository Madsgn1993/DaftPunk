import logo from './logo.svg';
import './App.css';
import PlayInstru from './functions/PlayInstru';
import PlaySong1 from './functions/PlaySong1';
import PlaySong2 from './functions/PlaySong2';

function App() {
  return (
    <div className="App">
      <h1>Jouons Daft Punk</h1>
      <div id="instru">
        <PlayInstru/>
      </div>
     <PlaySong1/>
     <PlaySong2/>
    </div>
  );
}

export default App;
