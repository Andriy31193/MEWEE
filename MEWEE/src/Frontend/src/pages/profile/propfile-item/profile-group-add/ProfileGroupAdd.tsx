import React, {ChangeEvent, useState} from "react";

interface Props {
    formik: any;
    groupCategory: string;
    handleDropdownChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    handleCreateGroup: () => void;
}

const ProfileGroupAdd: React.FC<Props> = ({
                                                 formik,
                                                 groupCategory,
                                                 handleDropdownChange,
                                                 handleCreateGroup
                                             }) => {
    return (
        <div>
            <input
                required
                autoComplete="groupName"
                name="groupName"
                id="groupName"
                placeholder={"Group name..." + "*"}
                autoFocus
                value={formik.values.groupName}
                onChange={formik.handleChange}
            ></input>
            <select value={groupCategory} onChange={handleDropdownChange}>
                <option value="">Select an option</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Policy">Policy</option>
                <option value="Music">Music</option>
                <option value="Union">Union</option>
                <option value="Education">Education</option>
            </select>
            <button onClick={() => handleCreateGroup()}>CREATE</button>
        </div>
    );
};

export default ProfileGroupAdd;
