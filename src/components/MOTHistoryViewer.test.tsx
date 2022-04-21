import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MOTHistoryViewer, { Record } from "./MOTHistoryViewer";

const records: Array<Record> = [
  {
    date: "01/01/2020",
    passOrFail: "pass",
  },
  {
    date: "01/01/2021",
    passOrFail: "fail",
  },
];

it("takes an array of items passed in by props and lists them", () => {
  render(<MOTHistoryViewer records={records} />);
  expect(screen.getAllByRole("listitem").length).toBe(2);
  expect(
    screen
      .getAllByRole("listitem")
      .find((listitem) => listitem.textContent === "01/01/2020")
  ).toBe(2);
});
