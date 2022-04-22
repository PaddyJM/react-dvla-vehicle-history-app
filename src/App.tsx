import React, { useState } from "react";
import "./App.css";
import VehicleRegistrationForm from "./components/VehicleRegistrationForm";
import MOTHistoryViewer from "./components/MOTHistoryViewer";
import { MOTHistory } from "./types";

function App() {
  const baseURL =
    process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test"
      ? "http://localhost:3001"
      : "https://yoqf2tcb0h.execute-api.eu-west-2.amazonaws.com/prod";

  const [motHistory, setMOTHistory] = useState<MOTHistory>();
  const [registration, setRegistration] = useState<string>("");
  const [showNotFound, setShowNotFound] = useState(false);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMOTHistory(undefined);
    const response = await fetch(
      `${baseURL}/motHistory?registration=${registration}`
    );
    if (response.status === 404) {
      setShowNotFound(true);
    }
    if (response.status === 200) {
      const data = await response.json();
      setMOTHistory(data);
    }

    setRegistration("");
  };

  const handleRegistrationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    const dirtyRegistration = event.target.value;
    const cleanRegistration = dirtyRegistration
      .replace(/\s/g, "")
      .toUpperCase();
    setRegistration(cleanRegistration);
  };

  return (
    <>
      <VehicleRegistrationForm
        registration={registration}
        onFormSubmit={handleFormSubmit}
        onRegistrationChange={handleRegistrationChange}
      />
      {showNotFound && <h2>Registration not found.</h2>}
      {motHistory && <MOTHistoryViewer motHistory={motHistory} />}
    </>
  );
}

export default App;
