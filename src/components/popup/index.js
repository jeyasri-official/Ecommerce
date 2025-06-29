import React, { useEffect, useState } from 'react';
import "./style.css";

const Popuptop = (props) => {
  const [popup, setPopup] = useState(false);

  // Show popup on mount and hide after 2s
  useEffect(() => {
    setPopup(true);
    const timer = setTimeout(() => {
      setPopup(false);
    }, 2000);

    return () => clearTimeout(timer); // cleanup on unmount
  }, []);

  return (
    <div className={popup ? "popen" : "pclose"}>
      <div className={`timing_indicator ${popup ? "animate" : ""}`}></div>
      <div className="popup_container">
        <div className="popup">
          <span>{props.text}</span>
          <button onClick={() => setPopup(false)}>close</button>
        </div>
      </div>
    </div>
  );
};

export default Popuptop;
