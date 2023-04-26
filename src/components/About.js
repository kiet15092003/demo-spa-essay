import React from "react";
import aboutImage from "../images/aboutImg.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div className="aboutTop"  style={{backgroundImage: `url(${aboutImage})`}}></div>
      <div className="aboutBottom">
        <h1> ABOUT US </h1>
        <p>
          A burger shop is a popular type of fast-food restaurant that has become a staple in many communities around the world. These shops specialize in serving a variety of hamburgers, from classic cheeseburgers to unique and creative options that feature unexpected toppings like avocado, fried eggs, or even peanut butter. Along with burgers, these shops typically offer a range of sides such as french fries, onion rings, and salads, as well as beverages like soda, milkshakes, and beer.
          Burger shops are known for their casual and laid-back atmosphere, with many featuring comfortable seating areas and simple, no-frills decor. Some shops even have outdoor patios or drive-thru windows for added convenience. This relaxed vibe makes burger shops a popular choice for people of all ages, from families with young children to groups of friends looking for a quick and satisfying meal.
          While many burger shops are part of larger chains, there are also plenty of independent shops that have gained a loyal following among locals. These independent shops often pride themselves on using fresh, locally sourced ingredients to make their burgers and sides, and may have a more unique and personalized menu than their chain counterparts.
        </p>
      </div>
    </div>
  );
}

export default About;