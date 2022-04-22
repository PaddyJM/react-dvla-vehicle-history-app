import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import nock from "nock";
import { act } from "react-dom/test-utils";
import App from "./App";

it("renders the MOT history when clicked on", async () => {
  render(<App />);

  const button = await screen.findByText("Check MOT history.");
  const input = await screen.findByRole("textbox");

  fireEvent.input(input, { target: { value: "OY02UHE" } });
  fireEvent.click(button);

  expect(screen.findByText("Registration: OY02UHE")).toBeTruthy();
});

it("removes all whitespace from registration and sets it to uppercase", async () => {
  const funkyRegistration = " oy02 uhe ";

  render(<App />);
  const input = await screen.findByRole("textbox");
  const button = await screen.findByText("Check MOT history.");

  fireEvent.input(input, { target: { value: funkyRegistration } });
  fireEvent.click(button);

  expect(screen.findByText("Registration: OY02UHE")).toBeTruthy();
});
