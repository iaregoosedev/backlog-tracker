import "./App.css";
import Card from "./Components/Card/card.js";
import Navbar from "./Components/Navbar/navbar.js";
import appSearch from "./Components/Search/appSearch.js";
import { pokeSprite } from "./api/pokeApi.js";
import { appDetails, appAchievments } from "./api/steamApi/appDetails.js";
import { artSearch } from "./api/steamApi/gameArtFinder.js";
import { onClick } from "./api/steamApi/onClick.js";
import Fuse from "fuse.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Navbar/> */}
        <input
          type="text"
          id="appId"
          placeholder="Type Game ID"
          onChange={onClick}
        ></input>
        {/* <button onClick={onClick}>Search</button> */}
        <Card />
      </header>
    </div>
  );
}

export default App;
