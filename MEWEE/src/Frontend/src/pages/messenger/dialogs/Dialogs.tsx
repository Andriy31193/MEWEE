import { FC } from "react";
import { dialogsDataPropTypes } from "../messengerData.interface";
import styles from "./dialogs.module.scss";
import { useAuthStore, useUserStore } from "../../../entities";
import DialogItem from "./DialogItem";

const Dialog: FC<dialogsDataPropTypes> = ({
  onOpenChat,
  dialogData,
  modalDialogsData,
  sideBarType,
}) => {
  const { id } = useAuthStore();

  return (
    <div className={styles.div}>
      {dialogData &&
        dialogData.map((item: any) => {
          console.log("item:", item);
          const title = item.chatUsers
            ? item.chatUsers
                .map((user: any) => user.userId)
                .filter((userId: string) => userId !== id)
                .join(",")
            : "";

          return (
            <DialogItem
              onClick={() => onOpenChat(item.id)}
              key={item.id}
              userId={title}
              sideBarType={sideBarType}
              modalDialogsData={modalDialogsData}
            />
          );
        })}
    </div>
  );
};

export default Dialog;
