import React, { useState } from "react";
import "./App.css";
import VehicleRegistrationForm from "./components/VehicleRegistrationForm";
import MOTHistoryViewer from "./components/MOTHistoryViewer";
import { MOTHistory } from "./types";

function App() {
  const baseURL = "https://beta.check-mot.service.gov.uk";

  const [motHistory, setMOTHistory] = useState<MOTHistory>();
  const [registration, setRegistration] = useState<string>("");

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = await fetch(
      `http://localhost:3001/motHistory?registration=${registration}`
    ).then((response) => response.json());
    setMOTHistory(data);
    setRegistration("");
  };

  const handleRegistrationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    setRegistration(event.target.value);
  };

  return (
    <>
      <VehicleRegistrationForm
        registration={registration}
        onFormSubmit={handleFormSubmit}
        onRegistrationChange={handleRegistrationChange}
      />
      {motHistory && <MOTHistoryViewer motHistory={motHistory} />}
    </>
  );
}

export default App;
