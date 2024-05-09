import {
  moreTabsPropsTypes,
  moreTabsDataTypes,
} from "../settingData.interface";
import { FC } from "react";
import styles from "./more-tabs.module.scss"
import {useNavigate} from "react-router-dom";

const MoreTabs: FC<moreTabsPropsTypes> = ({ moreTabsData }) => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: "0 1rem" }}>
      {moreTabsData &&
          moreTabsData.map((item: moreTabsDataTypes) => {
          return (
              <div className={styles.div} id={item.id} onClick={() => navigate(item.path)}>{item.title}</div>
          );
        })}
    </div>
  );
};

export default MoreTabs;
