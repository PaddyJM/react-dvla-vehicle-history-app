import React, { useState } from "react";
import "./App.css";
import VehicleRegistrationForm from "./components/VehicleRegistrationForm";
import MOTHistoryViewer from "./components/MOTHistoryViewer";
import { MOTHistory } from "./types";

function App() {
  const baseURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001"
      : "https://yoqf2tcb0h.execute-api.eu-west-2.amazonaws.com/prod";

  const [motHistory, setMOTHistory] = useState<MOTHistory>();
  const [registration, setRegistration] = useState<string>("");

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMOTHistory(undefined);
    const data = await fetch(
      `${baseURL}/motHistory?registration=${registration}`
    ).then((response) => response.json());
    setMOTHistory(data);
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
      {motHistory && <MOTHistoryViewer motHistory={motHistory} />}
    </>
  );
}

export default App;
