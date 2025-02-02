import Navbar from "../../Components/Navbar/navbar";
import "./dashboard.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TrackingItem from "../../Components/Table/Tracking/trackingItem";

function Dashboard() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div className="dashContainer">
          <h3>Dashboard</h3>
          <div className="content">
            <div className="top">
              <div className="tracking dashCard left col-8">
                <h5>Currently Tracking</h5>
                <ul className="list">
                  <TrackingItem />
                  <TrackingItem />
                  <TrackingItem />
                  <TrackingItem />
                  <TrackingItem />
                  <TrackingItem />
                  <TrackingItem />
                  <TrackingItem />
                  <TrackingItem />
                  <TrackingItem />
                  <TrackingItem />
                  <TrackingItem />
                  <TrackingItem />
                  <TrackingItem />
                </ul>
              </div>
              <div className="breakdown dashCard right">
                <h5>Breakdown</h5>
              </div>
            </div>
            <div className="bottom">
              <div className="backlog dashCard left col-8">
                <h5>Backlog</h5>
                <ul className="list">
                  <TrackingItem />
                  <TrackingItem />
                  <TrackingItem />
                  <TrackingItem />
                  <TrackingItem />
                  <TrackingItem />
                  <TrackingItem />
                  <TrackingItem />
                  <TrackingItem />
                  <TrackingItem />
                  <TrackingItem />
                  <TrackingItem />
                  <TrackingItem />
                </ul>
              </div>
              <div className="achivements dashCard right">
                <h5>Achivements</h5>
                <ul className="list">
                  <TrackingItem />
                  <TrackingItem />
                  <TrackingItem />
                  <TrackingItem />
                  <TrackingItem />
                  <TrackingItem />
                  <TrackingItem />
                  <TrackingItem />
                  <TrackingItem />
                  <TrackingItem />
                  <TrackingItem />
                  <TrackingItem />
                  <TrackingItem />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Dashboard;
