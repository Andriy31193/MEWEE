import { FC } from "react";
import { Grid } from "@mui/material";
import DropdownTabs from "./dropdown-tabs/DropdownTabs";
import SwitchTabs from "./switch-tabs/SwitchTabs";
import { dropdownTabsData, switchTabsData } from "./settingData";
const Setting: FC = () => {
    return (
        <div>
            <Grid container>
                <Grid md={6}>
                    <DropdownTabs dropdownTabsData={dropdownTabsData} />
                </Grid>
                <Grid md={6}>
                    <SwitchTabs switchTabsData={switchTabsData} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Setting;