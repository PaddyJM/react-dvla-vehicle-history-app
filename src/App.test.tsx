import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import nock from "nock";
import { act } from "react-dom/test-utils";
import App from "./App";

it("renders the MOT history when clicked on", async () => {
  render(<App />);

  const button = screen.getByText("Check MOT history.");
  const input = screen.getByRole("textbox");

  fireEvent.input(input, { target: { value: "OY02UHE" } });
  fireEvent.click(button);

  expect(await screen.findByText("Registration: OY02UHE")).toBeTruthy();
});

it("removes all whitespace from registration and sets it to uppercase", async () => {
  const funkyRegistration = " oy02 uhe ";

  render(<App />);
  const input = screen.getByRole("textbox");
  const button = screen.getByText("Check MOT history.");

  fireEvent.input(input, { target: { value: funkyRegistration } });
  fireEvent.click(button);

  expect(await screen.findByText("Registration: OY02UHE")).toBeTruthy();
});

it("resets mot history on second submit", async () => {
  const firstRegistration = "OY02UHE";

  render(<App />);
  const input = screen.getByRole("textbox");
  const button = screen.getByText("Check MOT history.");

  fireEvent.input(input, { target: { value: firstRegistration } });
  fireEvent.click(button);

  expect(await screen.findByText("Registration: OY02UHE")).toBeTruthy();

  fireEvent.input(input, { target: { value: "foo" } });
  fireEvent.click(button);

  expect(screen.queryByText("Registration: OY02UHE")).toBeFalsy();
});

it("shows not found message when registration is not found", async () => {
  render(<App />);
  const input = screen.getByRole("textbox");
  const button = screen.getByText("Check MOT history.");

  fireEvent.input(input, { target: { value: "blash" } });
  fireEvent.click(button);

  expect(await screen.findByText("Registration not found.")).toBeTruthy();
});
