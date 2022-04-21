import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MOTHistoryViewer from "./MOTHistoryViewer";
import { MOTHistory } from "../types";

const motHistory: MOTHistory = {
  registration: "OY02UHE",
  make: "VOLKSWAGEN",
  model: "GOLF",
  firstUsedDate: "2002.04.26",
  fuelType: "Diesel",
  primaryColour: "Green",
  motTests: [
    {
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
    },
    {
      completedDate: "2021.11.02 16:01:32",
      testResult: "FAILED",
      odometerValue: "160581",
      odometerUnit: "mi",
      motTestNumber: "314868429515",
      rfrAndComments: [
        {
          text: "Front Brake pipe corroded, covered in grease or other material  to rear (1.1.11 (c))",
          type: "ADVISORY",
        },
        {
          text: "Exhaust has a major leak of exhaust gases (6.1.2 (a))",
          type: "PRS",
        },
      ],
    },
  ],
};

it("renders the relevant details of an MOT History", () => {
  render(<MOTHistoryViewer motHistory={motHistory} />);
  expect(screen.findByText("Registration: OY02UHE")).toBeTruthy();
  expect(screen.findByText("Make: VOLKSWAGEN")).toBeTruthy();
  expect(screen.findByText("Model: GOLF")).toBeTruthy();
  expect(screen.findByText("First Date Used: 2002.04.26")).toBeTruthy();
  expect(screen.findByText("Fuel Type: Diesel")).toBeTruthy();
  expect(screen.findByText("Primary Colour: Green")).toBeTruthy();
});
