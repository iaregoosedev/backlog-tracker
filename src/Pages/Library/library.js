import Navbar from "../../Components/Navbar/navbar";
import "./library.css";

function Library() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <h3>My Library</h3>
        <div className="testContainer">
          <div className="inputItem">
            <label for="location" className="inputLabel">
              Location I still got it buddy
            </label>
            <input id="location" className="input"></input>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Library;
