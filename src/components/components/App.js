import React, { useState } from "react";
import UsernameInput from "./UsernameInput";
import ButtonsPage from "./ButtonsPage";
import NewButtonsPage from "./NewButtonsPage";
import OncologyForecastPage from "./OncologyForecastPage"; // Import the new Oncology Forecast Page
import ModelManagementPage from "./ModelManagementPage"; // Import the new Model Management Page
import LoadPage from "./LoadPage"; // Import the new Load Page

function App() {
  const [page, setPage] = useState("input");
  const [showNewButtons, setShowNewButtons] = useState(false);

  const showButtonsPage = () => {
    setPage("buttons");
    setShowNewButtons(false);
  };

  const displayNewButtonsPage = () => {
    setShowNewButtons(true);
  };

  const showInputPage = () => {
    setPage("input");
  };

  const showOncologyForecastPage = () => {
    setPage("oncologyForecast");
  };

  const showModelManagementPage = () => {
    setPage("modelManagement");
  };

  const showLoadPage = () => {
    setPage("load");
  };

  const handleBack = (prevPage) => {
    setPage(prevPage);
  };

  return (
    <>
      {page === "input" && <UsernameInput onDisplayUsername={showOncologyForecastPage} />}
      {page === "oncologyForecast" && (
        <OncologyForecastPage onModelManagement={showModelManagementPage} onBack={() => handleBack("input")} />
      )}
      {page === "modelManagement" && (
        <ModelManagementPage
          onLoad={showLoadPage}
          onFresh={showButtonsPage}
          onBack={() => handleBack("oncologyForecast")}
        />
      )}
      {page === "load" && <LoadPage onBack={() => handleBack("modelManagement")} />}
      {page === "buttons" && !showNewButtons && (
        <ButtonsPage onBack={showInputPage} onDisplayNewButtonsPage={displayNewButtonsPage} />
      )}
      {showNewButtons && <NewButtonsPage onBack={showButtonsPage} />}
    </>
  );
}

export default App;
