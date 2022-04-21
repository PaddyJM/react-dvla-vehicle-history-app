import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

it("renders the MOT history when clicked on", async () => {
  render(<App />);

  const button = await screen.findByText("Check MOT history.");
  const input = await screen.findByRole("textbox");

  fireEvent.input(input, { target: { value: "OY02UHE" } });
  fireEvent.click(button);

  expect(screen.findByText("Registration: OY02UHE")).toBeTruthy();
});
