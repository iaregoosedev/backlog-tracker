import "../App.css";
import { HashRouter as Router, His } from "react-router-dom";
import AnimatedRoutes from "../Components/AnimatedRoutes";

function App({}) {
  return (
    <div className="App">
      <Router>
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;
