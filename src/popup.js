// Popup.js

import React, { useEffect, useRef } from 'react';
import './Popup.css';

const Popup = ({ isOpen, onClose }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close the popup if the click is outside the popup container
      if (isOpen && popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Attach the event listener to the document
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="popup-container" ref={popupRef}>
        <div className="close-btn" onClick={onClose}>×</div>
        <h2>Popup Content</h2>
        <p>This is a simple React popup!</p>
      </div>
    </div>
  );
};

export default Popup;
// App.js

import React, { useState } from 'react';
import Popup from './Popup';

const App = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="app-container">
      <button onClick={openPopup}>Open Popup</button>
      <Popup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
};

export default App;
/* Popup.css */

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-container {
  position: relative;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.close-btn {
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 18px;
  color: #333;
}

.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

button {
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
}
