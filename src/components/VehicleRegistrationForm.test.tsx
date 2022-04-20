import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import VehicleRegistrationForm from "./VehicleRegistrationForm";

const registration = "OY02UHE";
const mockHandleFormSubmit = jest.fn((e) => e.preventDefault());
const mockHandleRegistrationChange = jest.fn((e) => e.preventDefault());

it("renders an input field with 'Enter vehicle registration here.' greyed out", () => {
  render(
    <VehicleRegistrationForm
      registration={registration}
      onFormSubmit={mockHandleFormSubmit}
      onRegistrationChange={mockHandleRegistrationChange}
    />
  );
  expect(
    screen.queryByPlaceholderText("Enter vehicle registration here.")
  ).toBeTruthy();
});

it("renders a button with the text 'Check MOT history.'", () => {
  render(
    <VehicleRegistrationForm
      registration={registration}
      onFormSubmit={mockHandleFormSubmit}
      onRegistrationChange={mockHandleRegistrationChange}
    />
  );
  expect(
    screen.getByRole("button", { name: "Check MOT history." })
  ).toBeTruthy();
});

it("submits a form event when the button is clicked", () => {
  render(
    <VehicleRegistrationForm
      registration={registration}
      onFormSubmit={mockHandleFormSubmit}
      onRegistrationChange={mockHandleRegistrationChange}
    />
  );

  fireEvent.submit(screen.getByRole("form"));

  expect(mockHandleFormSubmit).toBeCalled();
});

it("calls the registration change function on a change event", async () => {
  render(
    <VehicleRegistrationForm
      registration=""
      onFormSubmit={mockHandleFormSubmit}
      onRegistrationChange={mockHandleRegistrationChange}
    />
  );
  const input = screen.getByRole("textbox");

  fireEvent.change(input, { target: { value: registration } });

  expect(mockHandleRegistrationChange).toBeCalled();
});
