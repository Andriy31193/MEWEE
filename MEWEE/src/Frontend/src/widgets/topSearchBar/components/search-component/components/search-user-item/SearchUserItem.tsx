import React, { useState } from "react";
import styles from "./search_user_item.module.scss"
import { ReactComponent as CloseIcon } from "../../../../../../assets/image/icons/CloseIcon.svg";

export const SearchUserItem= () => {

    return (
        <div className={styles.div}>
            <div>
                <img src="https://masterpiecer-images.s3.yandex.net/c352b1b9801c11ee9607720ccb3e265f:upscaled"/>
                <h2>User one</h2>
                <h5>(@user25254)</h5>
            </div>
            <div>
                <CloseIcon />
            </div>
        </div>
    );
};

export default SearchUserItem;
