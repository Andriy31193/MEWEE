import { FC } from "react";
import { Grid } from "@mui/material";
import DialogSidebar from "./dialog-sidebar/DialogSidebar";
import ChatWindow from "./chat-window/ChatWindow";
const Chat: FC = () => {
  return (
    <>
      <div style={{ padding: "1rem" }}>
        <Grid container>
          <Grid md={3} sx={{ maxHeight: "82vh", overflowY: "auto" }}>
            <DialogSidebar />
          </Grid>
          <Grid md={9}>
            <ChatWindow />
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default Chat;
