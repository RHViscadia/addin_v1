import React, { useState } from "react";
import "./UsernameInput.css"; // Ensure this import statement is correct

function UsernameInput({ onDisplayUsername }) {
  const [username, setUsername] = useState("");
  document.getElementById("html-content").style.display = "none";
  
  const displayUsernameInExcelAndNavigate = async () => {
    try {
      await Excel.run(async (context) => {
        const sheet = context.workbook.worksheets.getActiveWorksheet();
        const range = sheet.getRange("A1");
        range.values = [[username]];
        range.format.autofitColumns();
        await context.sync();
      });
      onDisplayUsername();
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div className="username-input-container">
      <div className="redrec"></div>
      <div className="whiterec"></div>
      <div className="rec"></div>
        <img src="assets/Screenshot 2024-03-28 171927.png" alt="Viscadia Logo" className="logo" />
      
      <h2>Viscadia Forecasting Platform</h2>
      <div className="user-profile-button">
        <button>User Profile Information</button>
      </div>
      <div className="input-container">
        
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your Username"
        />
        
        <div className="buttonf">
        <button onClick={displayUsernameInExcelAndNavigate}>Proceed →</button>
        </div>
      </div>
    </div>
  );
}

export default UsernameInput;
