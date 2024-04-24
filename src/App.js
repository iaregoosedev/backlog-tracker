import './App.css';
import {pokeSprite} from "./api/pokeApi.js";
import { appList } from './api/steamApi/appList.js';
import {artSearch} from './api/steamApi/gameArtFinder.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <input type="text" id="pokemonName" placeholder="Type Pokemon Name"></input>
      <button onClick={pokeSprite}>Search</button>
      <img src="" alt="Sprite" id="sprite"></img>
      <h3 id="name">{pokeSprite}</h3> */}
      <input type="text" id="appId" placeholder="Type Game ID"></input>
      <button onClick={artSearch}>Search</button>
      <img src="" id="url"></img>
      </header>
    </div>
  );
  appList();
}

export default App;
