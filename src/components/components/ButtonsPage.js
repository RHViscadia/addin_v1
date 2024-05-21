import React, { useEffect } from "react";

const ButtonsPage = ({ onBack, onDisplayNewButtonsPage }) => {
  const handleButtonClick = async (buttonName) => {
    document.getElementById("html-content").style.display = "none";
    console.log(`${buttonName} clicked`);
    if (buttonName === "Add Assumption") {
      try {
        await Excel.run(async (context) => {
          const workbook = context.workbook;
          const sheet = workbook.worksheets.getActiveWorksheet();
          const activeCell = workbook.getActiveCell();

          activeCell.load("rowIndex");
          activeCell.load("columnIndex");
          activeCell.load("address");
          await context.sync();

          const columnBCell = sheet.getCell(activeCell.rowIndex, 1);
          columnBCell.load("values");
          await context.sync();
          const isColumnBetweenCAndF = activeCell.columnIndex >= 2 && activeCell.columnIndex <= 5;
          console.log(`Active Cell Address: ${activeCell.address}`);
          console.log(`Value in Column B of Active Row: ${columnBCell.values}`);

          if (columnBCell.values[0][0] === "Out" && isColumnBetweenCAndF) {
            const rowToInsert = sheet.getRangeByIndexes(activeCell.rowIndex + 1, 1, 1, 5);
            rowToInsert.insert(Excel.InsertShiftDirection.down);

            const newRowRange = sheet.getRangeByIndexes(activeCell.rowIndex + 1, 1, 1, 5);
            newRowRange.copyFrom(activeCell, Excel.RangeCopyType.formats);
            await context.sync();
            const downshiftedCellInColumnB = sheet.getCell(activeCell.rowIndex + 1, 1);
            downshiftedCellInColumnB.values = [["Out"]];
            await context.sync();
            console.log("Inserting new row because column B has 'Out'");
          } else {
            console.log("The value in column B of the active row is not 'Out'. No row inserted.");
          }
        });
      } catch (error) {
        console.error("Error with Excel:", error);
      }
    }

    if (buttonName === "Create Table") {
      await Excel.run(async (context) => {
        const sheet = context.workbook.worksheets.getActiveWorksheet();
        const outputSpecRange = sheet.getRange("B14:B17");
        outputSpecRange.values = [["Out"], ["Out"], ["Out"], ["Out"]];
        const headerRange = sheet.getRange("C13:F13");
        headerRange.format.fill.color = "grey";
        const tableRange = sheet.getRange("C14:F17");
        tableRange.format.fill.color = "lightgrey";
        await context.sync();
      });
    }
  };

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
      <button style={buttonStyle} onClick={() => handleButtonClick("Create Table")}>Create Table</button>
      <button style={buttonStyle} onClick={() => handleButtonClick("Add Assumption")}>Add Assumption</button>
      <button style={buttonStyle} onClick={() => handleButtonClick("Add New Flow")}>Add New Flow</button>
      <button style={buttonStyle} onClick={() => handleButtonClick("Open Flow Manager")}>Open Flow Manager</button>
      <button style={buttonStyle} onClick={() => handleButtonClick("Generate Ace Sheet")}>Generate Ace Sheet</button>
      <button style={buttonStyle} onClick={onBack}>Back to Home</button>
    </div>
  );
};

export default ButtonsPage;
