import { FC } from "react";
import { Grid } from "@mui/material";
import DropdownTabs from "./dropdown-tabs/DropdownTabs";
import SwitchTabs from "./switch-tabs/SwitchTabs";
import { dropdownTabsData, switchTabsData } from "./settingData";
const Setting: FC = () => {
    const dropdownTabs = dropdownTabsData();
    const switchTabs = switchTabsData();
    return (
        <div>
            <Grid container>
                <Grid md={6}>
                    <DropdownTabs dropdownTabsData={dropdownTabs} />
                </Grid>
                <Grid md={6}>
                    <SwitchTabs switchTabsData={switchTabs} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Setting;