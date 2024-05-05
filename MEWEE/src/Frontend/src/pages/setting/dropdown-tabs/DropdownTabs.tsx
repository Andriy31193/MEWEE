import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  dropdownTabsPropsTypes,
  dropdownTabsDataTypes,
} from "../settingData.interface";
import { FC } from "react";

const DropdownTabs: FC<dropdownTabsPropsTypes> = ({ dropdownTabsData }) => {
  return (
    <div style={{ padding: "0 1rem" }}>
      {dropdownTabsData &&
        dropdownTabsData.map((item: dropdownTabsDataTypes) => {
          return (
            <Accordion
              key={item.id}
              sx={{
                color: "#25005C",
                borderBottom: "none",
                padding: "0.7rem",
                margin: "1rem 0",
              }}
              defaultExpanded={item.id === "1"}
            >
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon sx={{ color: "#B67AFE" }} />}
                aria-controls="panel1-content"
                id={item.id}
                sx={{ borderBottom: "none" }}
              >
                <h2 style={{ fontSize: "1rem" }}>{item.title}</h2>
              </AccordionSummary>
              <AccordionDetails sx={{ border: "none" }}>
                {item.item}
              </AccordionDetails>
            </Accordion>
          );
        })}
    </div>
  );
};

export default DropdownTabs;
