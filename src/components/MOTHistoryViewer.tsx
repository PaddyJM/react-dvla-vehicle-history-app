import React, { useState } from "react";
import { MOTHistory } from "../types";
import MOTTestCard from "./MOTTestCard";

interface Props {
  motHistory: MOTHistory;
}

function MOTHistoryViewer(props: Props) {
  const { motHistory } = props;

  const [showMOTTests, setShowMOTTests] = useState(false);

  const handleButtonClick = () => {
    setShowMOTTests(!showMOTTests);
  };

  return (
    <ul>
      <li key={1}>
        <h2>Registration: {motHistory.registration}</h2>
        <h2>Make: {motHistory.make}</h2>
        <h2>Model: {motHistory.model}</h2>
        <h2>First Date Used: {motHistory.firstUsedDate}</h2>
        <h2>Fuel Type: {motHistory.fuelType}</h2>
        <h2>Primary Colour: {motHistory.primaryColour}</h2>
        <button type="button" onClick={handleButtonClick}>
          Show MOT Tests.
        </button>
        {showMOTTests && (
          <ul data-testid="mot-tests">
            {motHistory.motTests.map((motTest) => {
              return (
                <li key={motTest.motTestNumber}>
                  <MOTTestCard motTest={motTest} />
                </li>
              );
            })}
          </ul>
        )}
      </li>
    </ul>
  );
}

export default MOTHistoryViewer;
