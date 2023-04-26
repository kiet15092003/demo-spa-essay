import React from "react";
import contactImg from "../images/contactImg.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="leftContact" style={{ backgroundImage: `url(${contactImg})` }}></div>
      <div className="rightContact">
        <h1> Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="10"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;