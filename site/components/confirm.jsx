import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Confirm = ({agreeChangeHandler}) => {
  const purpose = "研究の目的は〜〜〜〜です。";

  return (
    <>
      <p>{purpose}</p>
      <FormControlLabel
        control={<Checkbox onChange={agreeChangeHandler} />}
        label="Agreed"
      />
    </>
  );
};

export default Confirm;
