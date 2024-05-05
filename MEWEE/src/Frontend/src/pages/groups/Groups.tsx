import { FC } from "react";
import { Grid } from "@mui/material";
import { dataSideBar, dataGroupItem } from "./groupData";
import GroupItem from "./group-item/GroupItem";
import Sidebar from "./sidebar/Sidebar";
import { switchTabsData } from "../setting/settingData";

const Groups: FC = () => {
  const sideBarData = dataSideBar();
  return (
    <Grid container sx={{ paddingRight: "1rem", paddingLeft: "1rem" }}>
      <Grid item md={3}>
        <Sidebar data={sideBarData} />
      </Grid>
      <Grid item md={9}>
        <GroupItem data={dataGroupItem} />
      </Grid>
    </Grid>
  );
};
export default Groups;
