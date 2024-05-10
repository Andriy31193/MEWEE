import React from "react";
import styles from "./custom_setting_buttons.module.scss"
import {useTranslation} from "react-i18next";

interface Props {
    onNavigateBack: () => void;
    isVisible: boolean;
}

export const CustomSettingButtons: React.FC<Props> = ({ onNavigateBack, isVisible }) => {
    const { t } = useTranslation();

    return (
        <div className={styles.div_navigation}>
            {isVisible && (
                <button>{t("save")}</button>
            )}
            <button onClick={onNavigateBack}>{t("back")}</button>
        </div>
    );
};

export default CustomSettingButtons;
