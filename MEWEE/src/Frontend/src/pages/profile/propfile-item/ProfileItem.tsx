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
import { useUserStore } from "../../../entities";
const ProfileItem: FC<{ profileData: any; friends: any }> = ({
  profileData,
  friends,
}) => {
  const {getProfileGallery} = useUserStore();
  const [gallery, setGallery] = useState<any>(null);
  const [activeItemId, setActiveItemId] = useState<number | null>(null);

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


  return (
    <>
      {profileData && (
        <div className={styles.div}>
          <ul>
            {profileButtonsData &&
              profileButtonsData.map((item: profileButtonsDataTypes) => {
                return (
                  <li
                    className={`${styles.li} ${
                      item.id === activeItemId ? styles._li_active : ""
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
          {(activeItemId === 5 && gallery)  && (
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
              <PhotoVideoSliders  retouch={true} title={"Ретуш"} sliderData={gallery} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ProfileItem;
