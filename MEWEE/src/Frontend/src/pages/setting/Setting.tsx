import { FC, useEffect } from "react";
import { Grid } from "@mui/material";
import MoreTabs from "./more-tabs/MoreTabs";
import SwitchTabs from "./switch-tabs/SwitchTabs";
import { moreTabsData, switchTabsData } from "./settingData";
import { useSearchBar } from "../../entities";
const Setting: FC = () => {
  const moreTabs = moreTabsData();
  const { setTitle } = useSearchBar();
  const switchTabs = switchTabsData();


  useEffect(()=>
  {
    setTitle("settings")
  }, [])
  return (
    <div>
      <Grid container>
        <Grid item md={6}>
          <MoreTabs moreTabsData={moreTabs} />
        </Grid>
        <Grid item md={6}>
          <SwitchTabs switchTabsData={switchTabs} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Setting;
