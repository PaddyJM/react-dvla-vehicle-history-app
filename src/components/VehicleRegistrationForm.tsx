import React from "react";

interface Props {
  registration: string;
  onFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onRegistrationChange: React.ChangeEventHandler<HTMLInputElement>;
}

function VehicleRegistrationForm(props: Props) {
  const { onFormSubmit, onRegistrationChange, registration } = props;
  return (
    <form onSubmit={onFormSubmit} aria-label="form">
      <h1>MOT History Finder</h1>
      <input
        type="text"
        value={registration}
        onChange={onRegistrationChange}
        placeholder="Enter vehicle registration here."
      />
      <button type="submit" className="btn btn-primary ">
        Check MOT history.
      </button>
    </form>
  );
}

export default VehicleRegistrationForm;
