// import Logo from "../../Data/logo";
import { Link } from "react-router-dom";
// import { Link as LinkS } from "react-scroll";
// import { useRef } from "react";
// import { useState } from "react";
import "./navbar.css";
// import {motion as m} from "framer-motion";
// import { Squash as Hamburger } from 'hamburger-react'

export default function Navbar() {
  return (
    <div className="navBar">
      <h3 className="logo">saddad</h3>
      <Link to="/" className="navButton">
        <h6 className="navLabel" href="">
          Dashboard
        </h6>
      </Link>
      <Link to="/Library" className="navButton">
        <h6 className="navLabel" href="">
          My Library
        </h6>
      </Link>
      <Link to="/Discover" className="navButton">
        <h6 className="navLabel" href="">
          Discover
        </h6>
      </Link>
    </div>
    // <div className="navBar">
    //   <h3 className="logo">saddad</h3>
    //   <div className="navLinks">
    //     <Link to="/" className="link">
    //       <p className="navLabel" href="">
    //         Dashboard
    //       </p>
    //     </Link>
    //     <Link to="/Library" className="link active">
    //       <p className="navLabel" href="">
    //         My Library
    //       </p>
    //     </Link>
    //     <Link to="/Discover" className="link">
    //       <p className="navLabel" href="">
    //         Discover
    //       </p>
    //     </Link>
    //   </div>
    // </div>
  );
}
