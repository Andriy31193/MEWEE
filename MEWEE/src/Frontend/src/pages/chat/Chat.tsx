import { FC, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import DialogSidebar from "./dialog-sidebar/DialogSidebar";
import ChatWindow from "./chat-window/ChatWindow";
import { useAuthStore, useChatStore, useSignalRStore } from "../../entities";
import { useNavigate } from "react-router-dom";
const Chat: FC = () => {
  const navigate = useNavigate();
  const { connection, joinChat } = useSignalRStore();
  const { isLoggedIn, id } = useAuthStore();

  if (!isLoggedIn) navigate("auth/login");

  const { getChats, setCurrentChat } = useChatStore();
  const [chatsData, setChatsData] = useState<any>(null);
  const [currentChatId, setCurrentChatId] = useState<string>("");
  const [messagesData, setMessagesData] = useState<any>(null);

  const onResponse = (data: any, errors: string[]) => {
    if (errors.length == 0 && data !== null) {
      console.log("NEW CHAT DATA: ", data);
      setChatsData(data);
    }
  };

  const onMessageReceived = (message: string) => {
    console.log("refreshing chats...", message);
    refreshChats();
  };

  const refreshChats = () => {
    getChats(onResponse);
  };
  useEffect(() => {
    refreshChats();
  }, []);

  const loadMessagesData = (chatId: string) => {
    setCurrentChatId(chatId);
    joinChat(chatId);
    setCurrentChat(chatsData);
  };

  return (
    <>
      <div style={{ padding: "1rem" }}>
        <Grid container>
          <Grid item md={3} sx={{ maxHeight: "82vh", overflowY: "auto" }}>
            <DialogSidebar chats={chatsData} onOpenChat={loadMessagesData} />
          </Grid>
          <Grid md={9}>
            <ChatWindow  chatId={currentChatId} />
          </Grid>
        </Grid>
      </div>
    </>
  );
};
//participants={}
export default Chat;
