import React from "react";
import { RFRAndComment } from "../types";

interface Props {
  rfrAndComments: Array<RFRAndComment>;
}

function ReasonsForRejection(props: Props) {
  const { rfrAndComments } = props;
  return (
    <div>
      <ul>
        {rfrAndComments.map((rfrAndComment) => {
          return (
            <li key={Math.random().toString(36).slice(2)}>
              <h4>Type Of Reason: {rfrAndComment.type}</h4>
              <h4>Comment: {rfrAndComment.text}</h4>
              {rfrAndComment.dangerous && (
                <h4>Dangerous: {rfrAndComment.dangerous}</h4>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ReasonsForRejection;
