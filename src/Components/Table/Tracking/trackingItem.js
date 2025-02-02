import { div } from "framer-motion/client";
import "./trackingItem.css";

export default function TrackingItem() {
  return (
    <div className="item">
      <div className="gameInfo">
        <div>Item</div>
        <div className="gameName">
          <h6>{}</h6>
        </div>
      </div>
    </div>
  );
}
