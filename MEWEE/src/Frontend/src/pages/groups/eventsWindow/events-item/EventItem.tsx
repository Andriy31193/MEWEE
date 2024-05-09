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
                            <h4>{item.title}</h4>
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
