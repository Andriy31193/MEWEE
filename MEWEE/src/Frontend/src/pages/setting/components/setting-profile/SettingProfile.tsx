import ProfilePictureUploader from "../../../../features/profilePictureUploader/ProfilePictureUploader";
import styles from "./setting-profile.module.scss"
import {useNavigate} from "react-router-dom";
import React from "react";

const SettingProfile= () => {

    const navigate = useNavigate();

    const options = [
        { value: '0', text: 'Не вибрано' },
        { value: '1', text: 'Неодружений' },
        { value: '2', text: 'Зустрічаюсь' },
        { value: '3', text: 'Заручений' },
        { value: '4', text: 'Одружений' },
        { value: '5', text: 'У цивільному шлюбі' },
        { value: '6', text: 'Закоханий' },
        { value: '7', text: 'Все складно' },
        { value: '8', text: 'В активному пошуку' },
    ];

    return (
        <div className={styles.div}>
            <div className={styles.div_settings}>
                <div>
                    <h2>Змінити аватарку</h2>
                    <ProfilePictureUploader/>
                </div>
                <div className={styles.div_link}>
                    <h2>Особисте посилання</h2>
                    <div>
                        <p>(?)</p>
                        <div className={styles.hide_div}>Особисте посилання допоможе вам пояснити друзям, як знайти ваш профіль.</div>
                    </div>
                    <input/>
                </div>
                <div className={styles.div_status}>
                    <h2>Статус</h2>
                    <select>
                        {options.map((option) => (
                            <option key={option.value} value={option.value} className={styles.option}>{option.text}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.div_link}>
                    <h2>Місце проживання</h2>
                    <input/>
                </div>
            </div>
            <div className={styles.div_navigation}>
                <button>Сохранить</button>
                <button onClick={() => navigate('/settings')}>Назад</button>
            </div>
        </div>
    );
};

export default SettingProfile;
