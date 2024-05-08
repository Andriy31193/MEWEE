import { FC, useEffect } from "react";
import { Grid } from "@mui/material";
import DropdownTabs from "./dropdown-tabs/DropdownTabs";
import SwitchTabs from "./switch-tabs/SwitchTabs";
import { dropdownTabsData, switchTabsData } from "./settingData";
import { useSearchBar } from "../../entities";
const Setting: FC = () => {
  const dropdownTabs = dropdownTabsData();
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
          <DropdownTabs dropdownTabsData={dropdownTabs} />
        </Grid>
        <Grid item md={6}>
          <SwitchTabs switchTabsData={switchTabs} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Setting;
