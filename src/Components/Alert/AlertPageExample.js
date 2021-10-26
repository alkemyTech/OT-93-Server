import React, { useState } from "react";
import Alert from "./Alerts";
import { dummyProps } from "../../utils/Const/const";

const AlertPageExample = () => {
  // simple function to call Alert
  const clickHandler = () => {
    document.location.reload();
  };

  return (
    <div>
      <button
        onClick={() => {
          clickHandler();
        }}
      >
        Show Alert
      </button>
      <Alert {...dummyProps}></Alert>
    </div>
  );
};

export default AlertPageExample;
