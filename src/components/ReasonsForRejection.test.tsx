import React from "react";
import { render, screen } from "@testing-library/react";
import ReasonsForRejection from "./ReasonsForRejection";
import { RFRAndComment } from "../types";

const rfrAndComments: Array<RFRAndComment> = [
  {
    text: "Front Brake pipe corroded, covered in grease or other material to rear (1.1.11 (c))",
    type: "ADVISORY",
  },
  {
    text: "Exhaust has a major leak of exhaust gases (6.1.2 (a))",
    type: "PRS",
    dangerous: true,
  },
];

it("renders a list with the relevant properties", () => {
  render(<ReasonsForRejection rfrAndComments={rfrAndComments} />);

  expect(
    screen.getByText(
      "Comment: Exhaust has a major leak of exhaust gases (6.1.2 (a))"
    )
  ).toBeTruthy();

  expect(screen.getByText("Type Of Reason: ADVISORY")).toBeTruthy();

  expect(
    screen.getByText(
      "Comment: Front Brake pipe corroded, covered in grease or other material to rear (1.1.11 (c))"
    )
  ).toBeTruthy();

  expect(screen.getByText("Type Of Reason: PRS")).toBeTruthy();
});

it("renders the dangerous field only when it is there", () => {
  render(<ReasonsForRejection rfrAndComments={rfrAndComments} />);
  expect(screen.getAllByText(/Dangerous.*/).length).toBe(1);
});
