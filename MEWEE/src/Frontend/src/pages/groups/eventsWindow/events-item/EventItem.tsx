import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import DecryptedImg from "../../../profile/DecryptedImg";
import CustomButton from "../../../../widgets/сommon/custom-button/customButton";
import CustomModalIcon from "../../../../widgets/сommon/custom-modal-icon/CustomModalIcon";
import { modalPostDataLink } from "../../../../widgets/widgetData";
import styles from "./events_item.module.scss";

const EventItem: FC<{ item: any }> = ({ item }) => {
    const navigate = useNavigate();
    function formatTime(dateString: string) {
        const date = new Date(dateString);
        const day = date.getDate(); // Use getDate instead of getDay for day of the month
        const month = date.getMonth() + 1; // Months are zero-based, so add 1
        const year = date.getFullYear(); // Use getFullYear to get the full year
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const formattedTime = `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year.toString()}`;
        return formattedTime;
    }
    
    return (
        <Grid item md={3}>
            {item && (
                <div className={styles.div}>
                    <div className={styles.imagediv}>
                    {item.attachment && (
                        <DecryptedImg borderRadius="20px" size="100%" content={item.attachment}></DecryptedImg>
                    )}
                    </div>
                    <div className={styles.subdiv}>
                        <div className={styles.titlediv}>
                            <span>{item.title} {formatTime(item.happeningAtUtc)}</span>
                        </div>
                        <div className={styles.button_section}>
                            <CustomButton text={"Підписатись на подію"} onClick={() => {
                                navigate("/group/" + item.id, { replace: false });
                            }} />
                        </div>
                    </div>
                    <div className={styles.modal_button}>
                        {/* <CustomModalIcon id={item.id} links={modalPostDataLink} /> */}
                    </div>
                </div>
            )}
        </Grid>
    );
};

export default EventItem;