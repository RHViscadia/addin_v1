import React from "react";

const ModelManagementPage = ({ onLoad, onFresh }) => {
  const buttonStyle = {
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
      <button style={buttonStyle} onClick={onLoad}>Load</button>
      <button style={buttonStyle} onClick={onFresh}>Fresh</button>
    </div>
  );
};

export default ModelManagementPage;
