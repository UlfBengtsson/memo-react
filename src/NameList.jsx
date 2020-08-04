import React from "react";

const NameList = (props) => {
  return (
    <ul>
      {props.listNames.map((row, index) => (
        <li key={index}>
          <p>{row}</p>
        </li>
      ))}
    </ul>
  );
};

export default NameList;
