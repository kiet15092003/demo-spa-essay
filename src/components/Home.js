import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../images/banner.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Hot Burger </h1>
        <p> Hungry? Try Our Burgers Made with Half Pound Patties. </p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;