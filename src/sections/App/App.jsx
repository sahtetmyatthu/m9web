import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faViber, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "./app.css";

const App = () => {
  const urls = [
    "https://msng.link/o?959453384339=vi",
    "https://msng.link/o?959891190535=vi",
    "https://msng.link/o?959256753328=vi",
  ];

  // State to track the current index
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleViberClick = () => {
    // Update the index and wrap around to 0 when reaching the end of the list
    setCurrentIndex((prevIndex) => (prevIndex + 1) % urls.length);
  };

  return (
    <div className="contact-section">
      <div className="contact-options">
        <a
          className="viber"
          target="_blank"
          href={urls[currentIndex]} // Use the current index to get the URL
          rel="noopener noreferrer"
          onClick={handleViberClick} // Increment the index on click
        >
          <FontAwesomeIcon icon={faViber} className="icon" />
          <p style={{ color: "white" }}>Viber ဖြင့်ဆက်သွယ်ရန်</p>
        </a>
        <a
          className="telegram"
          target="_blank"
          href="https://t.me/Winner3_bot"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTelegram} className="icon" />
          <p style={{ color: "white" }}>Telegram ဖြင့်ဆက်သွယ်ရန်</p>
        </a>
        <a
          className="phone"
          target="_blank"
          href="tel:09444423341"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <p style={{ color: "white" }}>ဖုန်းဖြင့်ဆက်သွယ်မည်</p>
        </a>
      </div>
    </div>
  );
};

export default App;
