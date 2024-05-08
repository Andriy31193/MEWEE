import { FC, useState, useEffect } from "react";
import {
  profileButtonsData,
  portfilioData,
  setificateData,
  friendData,
} from "../profileData";
import { profileButtonsDataTypes } from "../profileData.interface";
import ProfilePost from "./profile-post/ProfilePost";
import Portfilio from "./portfilio/Portfilio";
import Friends from "./friends/Friends";
import PhotoVideoSliders from "../../../widgets/photo-video-sliders/PhotoVideoSliders";
import ProfileItemFilter from "../../../assets/image/icons/ProfileItemFilter.svg";
import styles from "./profile_item.module.scss";
import { useGroupsStore, useUserStore } from "../../../entities";
import { Input } from "@mui/material";
import { useFormik } from "formik";
import { GROUP_NAME_VALIDATION, LOGIN_SCHEMA } from "../../../shared/exportSharedMorules";
import { useNavigate } from "react-router-dom";
const ProfileItem: FC<{ profileData: any; friends: any }> = ({
  profileData,
  friends,
}) => {

  const [groupCategory, setGroupCategory] = useState('Entertainment');

  const handleDropdownChange = (event: any) => {
    setGroupCategory(event.target.value);
  };

  const [createGroupFormEnabled, setCreateGroupFormEnabled] = useState<boolean>(false);
  const { getProfileGallery } = useUserStore();
  const { createGroup } = useGroupsStore();
  const [gallery, setGallery] = useState<any>(null);
  const [activeItemId, setActiveItemId] = useState<number | null>(null);


  const formik = useFormik({
    initialValues: { groupName: "" },
    validationSchema: GROUP_NAME_VALIDATION,
    validateOnChange: true,
    validateOnBlur: true,

    onSubmit: () => {

    },
  });
  const navigate = useNavigate();
  useEffect(() => {
    refreshGallery();
    if (profileButtonsData.length > 0 && activeItemId === null) {
      setActiveItemId(profileButtonsData[0].id);
    }
  }, [activeItemId]);

  const handleLiClick = (itemId: number) => {
    setActiveItemId(itemId);
  };
  const onGetProfileGalleryResponse = (data: any, errors: string[]) => {
    if (errors.length == 0 && data !== null) {
      setGallery(data);
    }
  };
  const refreshGallery = () => {
    getProfileGallery(onGetProfileGalleryResponse);
  }
  const onGroupCreationResponse = (data: any, errors: string[]) => {
    if (errors.length === 0) {
      navigate('/group/' + data.nickname)
    } else console.error("Error occured. onGroupCreationResponse (ProfileItem)", errors);
  }
  const handleCreateGroup = () => {
    createGroup(onGroupCreationResponse, formik.values.groupName, "", groupCategory);

  }


  return (
    <>
      {profileData && (
        <div className={styles.div}>
          <ul>
            {profileButtonsData &&
              profileButtonsData.map((item: profileButtonsDataTypes) => {
                return (
                  <li
                    className={`${styles.li} ${item.id === activeItemId ? styles._li_active : ""
                      }`}
                    key={item.id}
                    onClick={() => handleLiClick(item.id)}
                  >
                    <h5>{item.text}</h5>
                  </li>
                );
              })}
          </ul>
          {activeItemId === 1 && <ProfilePost id={profileData.id} />}

          {activeItemId === 2 && (
            <Portfilio
              portfilioData={portfilioData}
              setificateData={setificateData}
            />
          )}

          {activeItemId === 3 && <Friends friendsData={friends} />}
          {activeItemId === 4 &&
            (
              <div className={styles.groups_container}>
                <div className={styles.groups_add_btn} onClick={() => setCreateGroupFormEnabled(!createGroupFormEnabled)}>
                  {createGroupFormEnabled ? "▲" : "▼"} NEW GROUP {createGroupFormEnabled ? "▲" : "▼"} </div>
                {createGroupFormEnabled && (
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
                )}
                {/* <Friends friendsData={friends} /> */}

              </div>
            )}
          {(activeItemId === 5 && gallery) && (
            <div className={styles.sliders_div}>
              <div className={styles.div_title}>
                <h1>Недавні</h1>
                <img src={ProfileItemFilter} />
              </div>
              <PhotoVideoSliders sliderData={gallery} />
              <PhotoVideoSliders retouch={true} title={"Ретуш"} sliderData={gallery} />
            </div>
          )}
          {(activeItemId === 6 && gallery) && (
            <div className={styles.sliders_div}>
              <div className={styles.div_title}>
                <h1>Недавні</h1>
                <img src={ProfileItemFilter} />
              </div>
              <PhotoVideoSliders sliderData={gallery} />
              <PhotoVideoSliders retouch={true} title={"Ретуш"} sliderData={gallery} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ProfileItem;
