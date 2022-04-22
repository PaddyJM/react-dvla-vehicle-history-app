import React, { useState } from "react";
import { MOTTest } from "../types";
import ReasonsForRejection from "./ReasonsForRejection";

interface Props {
  motTest: MOTTest;
}

export default function MOTTestCard(props: Props) {
  const { motTest } = props;

  const [showRFR, setShowRFR] = useState(false);

  const handleButtonClick = () => {
    setShowRFR(!showRFR);
  };

  return (
    <div className="mot-test">
      <h3>Completed Date: {motTest.completedDate}</h3>
      <h3>Test Result: {motTest.testResult}</h3>
      <h3>Expiry Date: {motTest.expiryDate}</h3>
      <h3>Odometer Value: {motTest.odometerValue}</h3>
      <h3>Odometer Unit: {motTest.odometerUnit}</h3>
      <h3>MOT Test Number: {motTest.motTestNumber}</h3>
      <button type="button" onClick={handleButtonClick}>
        Show Reasons for Rejection:
      </button>
      {motTest.rfrAndComments.length > 0 && showRFR && (
        <ReasonsForRejection rfrAndComments={motTest.rfrAndComments} />
      )}
    </div>
  );
}
