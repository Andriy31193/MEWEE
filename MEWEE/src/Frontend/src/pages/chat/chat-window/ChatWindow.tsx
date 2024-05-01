import { FC } from "react";
import CustomInput from "../../../widgets/сommon/custom-input/CustomInput";
import CustomModalIcon from "../../../widgets/сommon/custom-modal-icon/CustomModalIcon";
import { modalPostDataLink } from "../../../widgets/widgetData";
import VolumeHigh from "../../../assets/image/icons/VolumeHigh.svg";
import CommentWriterAvatar from "../../../assets/image/CommentWriterAvatar.png";
import styles from "./chat_window.module.scss";
const ChatWindow: FC = () => {
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
        <ul>
          <li></li>
        </ul>
        <ul>
          <li></li>
        </ul>
        <CustomInput inputTypes="chat" placeHolder="" />
      </div>
    </div>
  );
};

export default ChatWindow;
