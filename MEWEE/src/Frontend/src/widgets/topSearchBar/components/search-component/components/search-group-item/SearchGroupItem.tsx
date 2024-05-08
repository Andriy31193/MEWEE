import React, { useState } from "react";
import styles from "./search_group_item.module.scss"
import { ReactComponent as CloseIcon } from "../../../../../../assets/image/icons/CloseIcon.svg";

export const SearchGroupItem= () => {

    return (
        <div className={styles.div}>
            <div>
                <img src="https://masterpiecer-images.s3.yandex.net/c352b1b9801c11ee9607720ccb3e265f:upscaled"/>
                <h2>Group one</h2>
            </div>
            <div>
                <CloseIcon />
            </div>
        </div>
    );
};

export default SearchGroupItem;
