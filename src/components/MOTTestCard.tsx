import React from "react";
import { MOTTest } from "../types";

interface Props {
  motTest: MOTTest;
}

export default function MOTTestCard(props: Props) {
  const { motTest } = props;
  return (
    <div className="mot-test">
      <h3>Completed Date: {motTest.completedDate}</h3>
      <h3>Test Result: {motTest.testResult}</h3>
      <h3>Expiry Date: {motTest.expiryDate}</h3>
      <h3>Odometer Value: {motTest.odometerValue}</h3>
      <h3>Odometer Unit: {motTest.odometerUnit}</h3>
      <h3>MOT Test Number: {motTest.motTestNumber}</h3>
    </div>
  );
}
