import React from "react";

export interface Record {
  date: string;
  passOrFail: "pass" | "fail";
}

interface Props {
  records: Array<Record>;
}

function MOTHistoryViewer(props: Props) {
  const { records } = props;
  return (
    <ul>
      {records.map((record) => (
        <li key={record.date}>
          <h2>{record.date}</h2>
          <h2>{record.passOrFail}</h2>
        </li>
      ))}
    </ul>
  );
}

export default MOTHistoryViewer;
