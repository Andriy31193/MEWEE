import { FC, useEffect, useState } from "react";
import { dialogData } from "../../messenger/messengerData";
import Dialog from "../../messenger/dialogs/Dialogs";
import styles from "./dialog_sidebar.module.scss";
import { useAuthStore, useChatStore } from "../../../entities";
const DialogSidebar: FC<{chats: any, onOpenChat: (chatId: string) => void}> = ({
  chats,
  onOpenChat,
}) => {



  return (
    <>
      <div>
        {/* <div className={styles.div}>
          <p>
            goggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggog
            goggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggog
          </p>
        </div> */}
        <Dialog onOpenChat={onOpenChat} dialogData={chats} sideBarType={true} />
      </div>
    </>
  );
};

export default DialogSidebar;
