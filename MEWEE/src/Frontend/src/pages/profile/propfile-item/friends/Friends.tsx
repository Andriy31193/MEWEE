import { FC } from "react";
import { friendDataPropsTypes } from "../../profileData.interface";
import styles from "./friends.module.scss";
const Friends: FC<{friendsData:any}> = ({ friendsData }) => {
  return (
    <>
      <div className={styles.div}>
        <ul>
          {friendsData &&
            friendsData.map((item:any) => {
              return (
                <li key={item.id}>
                  {item.online ? (
                    <img className={styles.switch} src={item.onlineSwitch} />
                  ) : (
                    ""
                  )}
                  <img src={item.avatar} />
                  <h2>{item.name}</h2>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Friends;
