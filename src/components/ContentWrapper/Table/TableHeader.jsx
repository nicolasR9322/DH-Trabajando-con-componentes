import React from "react";

export const TableHeader = (props) => {
  return (
    <thead className="text-center">
      <tr>
        {props.headers.map((header) => {
          return <th scope="col">{header}</th>;
        })}
      </tr>
    </thead>
  );
};
