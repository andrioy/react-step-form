import React from "react";
import { Dialog, AppBar } from "@mui/material";

const Success = () => {
  return (
    <>
      <Dialog open fullWidth maxWidth="sm">
        <AppBar title="Success" />
        <h1>Thank You For Your Submission</h1>
        <p>You will get an email with further instructions.</p>
      </Dialog>
    </>
  );
};

export default Success;
