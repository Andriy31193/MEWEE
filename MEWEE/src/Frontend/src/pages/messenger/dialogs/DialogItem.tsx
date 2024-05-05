import { FC, useEffect, useState } from "react";
import CustomModalIcon from "../../../widgets/сommon/custom-modal-icon/CustomModalIcon";
import DialogCheck from "../../../assets/image/icons/DialogCheck.svg";
import {
    dialogsDataPropTypes,
    dialogDataTypes,
} from "../messengerData.interface";
import styles from "./dialog_item.module.scss";
import { useAuthStore, useUserStore } from "../../../entities";
import { decryptImage } from "../../../entities/sharedStores/post-utils";
const DialogItem: FC<{ onClick: ()=>void, userIds: any, sideBarType: boolean, modalDialogsData:any }> = ({
    onClick,
    userIds,
    sideBarType,
    modalDialogsData
}) => {
    const { id } = useAuthStore();
    const { getProfile } = useUserStore();
    const [speaker, setSpeaker] = useState<any>(null);
    const [avatar, setAvatar] = useState<any>(null);

    const onProfileResponse = (data: any, errors: string[]) => {

        if (errors.length == 0 && data !== null) {
            setSpeaker(data);
            data.profileAvatar && decryptImage(data.profileAvatar).then(setAvatar).catch(console.error);
        }
    };

    useEffect(() => {
        getProfile(onProfileResponse, userIds[0]);
    }, [])

    return (
        <>
        {speaker && (
        <div key={speaker.id} className={styles.chat_div} onClick={onClick}>
            <img src={avatar} />
            <div className={styles.chat_div_item}>
                <div className={styles.chat_div_item1}>
                    <h2>{speaker.firstName} {speaker.secondName}</h2>
                    <h5>@{speaker.username}</h5>
                    <p>{12334}</p> 
                </div>
                {!sideBarType && (
                    <>
                        <div className={styles.chat_div_item2}>
                            <h5>{speaker.time}</h5>
                            <div>
                                {speaker.newMessade && <h5>{speaker.valueMessage}</h5>}
                            </div>
                        </div>
                        <div className={styles.chat_div_item3}>
                            {speaker.check && <img src={DialogCheck} />}
                        </div>
                    </>
                )}
            </div>
            {!sideBarType && (
                <div className={styles.modal_div}>
                    <CustomModalIcon id={speaker.id} links={modalDialogsData} />
                </div>
            )}
        </div>
        )};
        </>
    );
}

export default DialogItem;
