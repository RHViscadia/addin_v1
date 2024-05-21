import React from "react";

const NewButtonsPage = ({ onBack }) => {
  const buttonstyle = {
    display: 'block',
    padding: '10px 20px',
    backgroundColor: '#0078D4',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s, transform 0.3s',
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <button style={buttonstyle}>Run Computation</button>
      <button style={buttonstyle}>Save Assumptions</button>
      <button style={buttonstyle}>Import Assumption</button>
      <button style={buttonstyle}>Add Event</button>
      <button style={buttonstyle}>Add Output Parameter</button>
      <button style={buttonstyle} onClick={onBack}>Back</button>
    </div>
  );
};

export default NewButtonsPage;
