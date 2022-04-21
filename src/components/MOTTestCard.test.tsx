import React from "react";
import { render, screen } from "@testing-library/react";
import MOTTestCard from "./MOTTestCard";

const motTest = {
  completedDate: "2021.11.03 14:59:18",
  testResult: "PASSED",
  expiryDate: "2022.11.05",
  odometerValue: "160582",
  odometerUnit: "mi",
  motTestNumber: "737942919276",
  rfrAndComments: [
    {
      text: "Offside Front Anti-roll bar linkage ball joint excessively worn (5.3.4 (a) (i))",
      type: "FAIL",
    },
    {
      text: "Offside Front Inner Brake pad(s) less than 1.5 mm thick (1.1.13 (a) (ii))",
      type: "FAIL",
    },
  ],
};

it("renders a card with the correct text in it", () => {
  render(<MOTTestCard motTest={motTest} />);

  expect(screen.getByText("Completed Date: 2021.11.03 14:59:18")).toBeTruthy();
  expect(screen.getByText("Test Result: PASSED")).toBeTruthy();
  expect(screen.getByText("Expiry Date: 2022.11.05")).toBeTruthy();
  expect(screen.getByText("Odometer Value: 160582")).toBeTruthy();
  expect(screen.getByText("Odometer Unit: mi")).toBeTruthy();
  expect(screen.getByText("MOT Test Number: 737942919276")).toBeTruthy();
});

const motTestWithoutRfr = {
  completedDate: "2021.11.03 14:59:18",
  testResult: "PASSED",
  expiryDate: "2022.11.05",
  odometerValue: "160582",
  odometerUnit: "mi",
  motTestNumber: "737942919276",
  rfrAndComments: [],
};

it("does not render 'reasons for rejection' when where are none", () => {
  render(<MOTTestCard motTest={motTestWithoutRfr} />);

  expect(screen.queryByTestId("reasons-for-rejection")).toBeFalsy();
});
