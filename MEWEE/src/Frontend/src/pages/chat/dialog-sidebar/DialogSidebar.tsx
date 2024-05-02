import { FC } from "react";
import { dialogData } from "../../messenger/messengerData";
import Dialog from "../../messenger/dialogs/Dialogs";
import styles from "./dialog_sidebar.module.scss";
const DialogSidebar: FC = () => {
  return (
    <>
      <div>
        {/* <div className={styles.div}>
          <p>
            goggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggog
            goggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggog
          </p>
        </div> */}
        <Dialog dialogData={dialogData} sideBarType={true} />
      </div>
    </>
  );
};

export default DialogSidebar;
