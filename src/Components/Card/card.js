import {
  renderAchievments,
  renderInformation,
} from "../../api/steamApi/appDetails";

function Card() {
  return (
    <div className="App">
      {/* <img src="" id="url"></img> */}
      <h3 id="name">{renderInformation}</h3>
      <p id="developers">{renderInformation}</p>
      {/* <p id="achievements">{appAchievments}</p> */}
      <ul id="achievements">{renderAchievments}</ul>
    </div>
  );
}

export default Card;
