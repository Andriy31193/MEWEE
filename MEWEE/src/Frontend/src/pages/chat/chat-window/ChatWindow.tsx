import { FC, useState, useEffect, useRef, ChangeEvent } from "react";
import EmojiIcon from "../../../assets/image/icons/EmojiIcon.svg";
import SentIcon from "../../../assets/image/icons/SentIcon.svg";
import AddCircle from "../../../assets/image/icons/AddCircle.svg";
import { smileData } from "../../../widgets/widgetData";
import CustomModalIcon from "../../../widgets/сommon/custom-modal-icon/CustomModalIcon";
import { modalPostDataLink } from "../../../widgets/widgetData";
import VolumeHigh from "../../../assets/image/icons/VolumeHigh.svg";
import CommentWriterAvatar from "../../../assets/image/CommentWriterAvatar.png";
import { chatDataTypes } from "../chatData.interface";
import { incomingMessageData } from "../chatData";
import styles from "./chat_window.module.scss";
import { useAuthStore, useChatStore, useSignalRStore } from "../../../entities";
interface ChatWindowProps {
  chatId: string | undefined;
}

const ChatWindow: FC<ChatWindowProps> = ({ chatId }) => {
  // Ensure chatId exists before rendering
  if (!chatId) {
    return null; // or any fallback UI if needed
  }

  const { connection, sendMessage } = useSignalRStore();

  const { getConversation } = useChatStore();
  const [chatData, setChatData] = useState<any>(null);
  const { id } = useAuthStore();
  const fileInputRef = useRef<HTMLInputElement>(null); // Создание рефа для элемента
  const [visibleSmile, setVisibleSmile] = useState<boolean>(true);
  const [massageArray, setMassageArray] = useState<chatDataTypes[]>([]);
  const [inputData, setInputData] = useState<string>("")
  const [incomingMessage, setIncomingMessage] = useState<chatDataTypes>(
    {
      id: "",
      content: "",
      createdAt: "",
      updatedAt: "",
      userType: ""
    }
  );
  const [outgoingMessage, setOutgoingMessage] = useState<chatDataTypes>(
    {
      id: "",
      content: "",
      createdAt: "",
      updatedAt: "",
      userType: ""
    }
  );


  const onResponse = (data: any, errors: string[]) => {

    if (errors.length == 0 && data !== null) {
      console.log("NEW CHAT DATA: ", data);
      setChatData(data);
    }
  };

  useEffect(() => {
    if (connection) {
      // Attach event listener for receiving messages
      connection.on('receiveMessage', (message: any, chatId: any) => {
        console.log("ON_RECEIVED", message);
        
          //setChatData(updatedChatData);
      });
      connection.on('onJoined', (messages: any, chatId: any) => {
        console.log("ON_JOINED");
        setChatData(messages);
      });
    }

    // Cleanup function
    // return () => {
    //     if (connection) {
    //         // Remove event listener when component unmounts
    //         connection.off('receiveMessage', handleMessageReceived);
    //     }
    // };
  }, [connection]); // Re-run effect when connection changes

  //return null; // You can return JSX here if needed


  useEffect(() => {
    setIncomingMessage(incomingMessageData)
    if (incomingMessage) {
      setMassageArray([...massageArray, incomingMessage])
    }
  }, [incomingMessage]);


  const handleClickSmileVisible = () => {
    setVisibleSmile(!visibleSmile);
  };

  const handleAddCircleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handlerDataInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputData(event.target.value)
  }

  const handleMessageClick = () => {
    // const randomNum = Math.floor(Math.random() * 900) + 100;
    // const newId = randomNum.toString();
    // setOutgoingMessage(
    //   {
    //     id: newId,
    //     content: inputData,
    //     createdAt: "1",
    //     updatedAt: "1",
    //     userType: "me"
    //   }
    // )
    if(chatData == null)
      {
        console.warn("chat data is null")
      return;
      }

    console.log(chatId, inputData, "2024-05-03 00:00:00");
    sendMessage(chatId, inputData, "2024-05-03 00:00:00");
    setInputData("")
  }
  useEffect(() => {
    if (outgoingMessage) {
      setMassageArray([...massageArray, outgoingMessage])
    }

  }, [outgoingMessage]);



  return (
    <div className={styles.div}>
      <div className={styles.subdiv_up}>
        <div className={styles.subdiv_up_left}>
          <img src={CommentWriterAvatar} />
          <div>
            <h5>
              Realylong namedguy <span>@username</span>
            </h5>
            <p>в мережі 12 хв тому</p>
          </div>
        </div>
        <div className={styles.subdiv_up_right}>
          <img src={VolumeHigh} />
          <div>
            <CustomModalIcon id={1} links={modalPostDataLink} />
          </div>
        </div>
      </div>
      <div className={styles.subdiv_down}>
        <div>
          {chatData && (
            chatData.map((item: any) => {
              return (
                <div key={item.id} className={styles.subdiv_message}>
                  {item.userId === id && (
                    <div className={styles.outgoing_message}>
                      <div>
                        <h5>
                          {item.content}
                        </h5>
                      </div>
                    </div>
                  )}
                  {item.userId !== id && (
                    <div className={styles.incoming_message}>
                      <div>
                        <h5>
                          {item.content}
                        </h5>
                      </div>
                    </div>
                  )}
                </div>
              )
            })
          )}
        </div>

        <form className={styles.input_message}>
          <input
            type="file"
            id="fileInput"
            ref={fileInputRef}
            className="hidden-input"
            name="uploadedFile"
            style={{ display: "none" }}
          />
          <img src={AddCircle} onClick={handleAddCircleClick} />{" "}
          <input
            type="text"
            value={inputData}
            onChange={handlerDataInput} />
          <div>
            <img onClick={handleClickSmileVisible} src={EmojiIcon} />
            <img src={SentIcon} onClick={handleMessageClick} />
          </div>

          <div
            className={
              visibleSmile
                ? styles.smile_icon
                : `${styles.smile_icon} ${styles._smile_icon_visible}`
            }
          >
            <ul>
              {smileData.map((item, index) => (
                <li key={index}>
                  <img src={item.smile} />
                </li>
              ))}
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatWindow;
