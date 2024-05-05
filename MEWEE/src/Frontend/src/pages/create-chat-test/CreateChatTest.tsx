import React, { FC, useState } from "react";
import { Grid, Button, TextField } from "@mui/material";
import CryptoJS from "crypto-js";
import { useChatStore } from "../../entities";

const CreateChatTest: FC = () => {
  
    const { createChat } = useChatStore();

  const handleSubmit = () => {
    createChat(onResponse, "d3c26a7f-399d-4bf5-a1ec-6482a27840ad");
  };

  const onResponse = (errors: string[]) => {
    console.log(errors);
    if (errors.length === 0) console.log("all good");
  };

  return (
    <Grid container spacing={2}>
      <Button onClick={handleSubmit}>OK</Button>
    </Grid>
  );
};

export default CreateChatTest;
