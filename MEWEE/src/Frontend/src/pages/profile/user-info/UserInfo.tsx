import { FC, useEffect, useState } from "react";
import { CircularProgress, Grid } from "@mui/material";
import ProfileLockal from "../../../assets/image/icons/ProfileLockal.svg";
import PropfileAdd from "../../../assets/image/icons/PropfileAdd.svg";
import ProfilePortfolio from "../../../assets/image/icons/ProfilePortfolio.svg";
import ProfileLovely from "../../../assets/image/icons/ProfileLovely.svg";
import ProfileFlash from "../../../assets/image/icons/ProfileFlash.svg";
import { decryptImage, encryptImage } from "../../../entities/sharedStores/post-utils";
import styles from "./user_info.module.scss";
import { useAuthStore, useUserStore } from "../../../entities";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import DecryptedImg from "../DecryptedImg";
const UserInfo: FC<{ userData: any }> = ({ userData }) => {
    const { id } = useAuthStore();
    const { t } = useTranslation();
    const { isLoading, followUser, unfollowUser, getFollowers, getFollowings, uploadPhotoToProfile, getProfileGallery } = useUserStore();
    const [avatar, setAvatar] = useState<any>(null);
    const [followingStatus, setFollowingStatus] = useState<string>("follow");
    const [gallery, setGallery] = useState<any>(null);
    const [followers, setFollowers] = useState<any>(null);
    const [followings, setFollowings] = useState<any>(null);

    const onFollowResponse = (errors: string[]) => {
        if (errors.length == 0) {
            refreshFollows();

        }
    };

    const handleFolow = (userId: string) => {

        if (followingStatus == "follow" || followingStatus == "follow_back")

            followUser(onFollowResponse, userId);
        else if (followingStatus == "unfollow" || followingStatus == "friends")
            unfollowUser(onFollowResponse, userId);
    }


    const onFollowersResponse = (data: any, errors: string[]) => {
        if (errors.length == 0 && data !== null) {
            setFollowers(data);
        }
    };
    const onFollowingsResponse = (data: any, errors: string[]) => {
        if (errors.length == 0 && data !== null) {
            setFollowings(data);
        }
    };
    const onGetProfileGalleryResponse = (data: any, errors: string[]) => {
        if (errors.length == 0 && data !== null) {
            setGallery(data);
            console.log("GALLERY:", data);
        }
    };

    const setStatus = (_followers: any, _followings: any) => {
        const follower = _followers.find((item: any) => item.id === id);
        const following = _followings.find((item: any) => item.id === id);

        if (follower != null && following != null) {
            // If the user is following and being followed back
            setFollowingStatus("friends");
        } else if (following != null && follower == null) {
            // If the user is being followed but not following back
            setFollowingStatus("follow_back");
        } else if (follower != null) {
            // If the user is not being followed but following back
            setFollowingStatus("unfollow");
        } else {
            // If the user is not being followed at all
            setFollowingStatus("follow");
        }
    }
    const refreshFollows = () => {
        getFollowers(onFollowersResponse, userData.id);
        getFollowings(onFollowingsResponse, userData.id);

    }

    const handleAddPhoto = async () => {
        // Create a hidden input element
        const input = document.createElement('input');
        input.type = 'file';

        // Set accept attribute to specify image files
        input.accept = 'image/*';

        // Add event listener for file selection
        input.addEventListener('change', async (event) => {
            const file = (event.target as HTMLInputElement).files?.[0];
            if (file) {
                try {
                    // Read the file contents as a data URL
                    const reader = new FileReader();
                    reader.onload = async (e) => {
                        if (e.target && e.target.result) {
                            const imageDataUrl = e.target.result as string;
                            // Encrypt the image data URL
                            const encryptedData = await encryptImage(imageDataUrl);
                            // Set the encrypted ima
                            // Update profile with the encrypted image data
                            uploadPhotoToProfile((errors: any) => {

                                if (errors.length == 0) {
                                    refreshGallery();
                                } else console.error(errors);
                            }, encryptedData);
                        }
                    };
                    reader.readAsDataURL(file); // Read file as data URL
                } catch (error) {
                    console.error('Error handling image:', error);
                }
            }
        });

        // Trigger file input click
        input.click();
    };

    const refreshGallery = () => 
        {

            getProfileGallery(onGetProfileGalleryResponse);
        }

    useEffect(() => {


        userData.profileAvatar &&
            decryptImage(userData.profileAvatar).then(setAvatar).catch(console.error);

        refreshFollows();
        refreshGallery();
    }, []);
    useEffect(() => {

        if (followers == null || followings == null)
            return;

        setStatus(followers, followings);
    }, [followers]);

    return (
        <>
            {(userData && followers && followings) && (
                <div className={styles.div}>
                    <div className={styles.sub_div1}>
                        <img className={styles.avatar} src={avatar} />
                        <div className={styles.user_name}>
                            <div>
                                <h1>{userData.firstName}</h1>
                                <h1>{userData.secondName}</h1>
                            </div>
                            <div>
                                {userData.location !== null && (
                                    <>
                                        <img src={ProfileLockal} />
                                        <h4>{userData.location}</h4>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className={styles.folowers}>
                            <div>
                                <h2>{followers.length}</h2>
                                <h3>Підписників</h3>
                            </div>
                            <div>
                                <h2>{followings.length}</h2>
                                <h3>Відстежується</h3>
                            </div>
                        </div>
                        <div className={styles.folow_button}>
                            {(userData.id !== id) && (

                                <button onClick={() => handleFolow(userData.id)}>{t(followingStatus)}</button>
                            )}
                            <img style={{ cursor: "pointer" }} onClick={handleAddPhoto} src={PropfileAdd} />
                            {isLoading && <CircularProgress size={"1rem"}></CircularProgress>}
                        </div>
                    </div>
                    <div className={styles.sub_div2}>
                        <ul>
                            {userData.workplace && (
                                <li key={"r"}>
                                    <img src={ProfilePortfolio} />
                                    <h5>{userData.workplace}</h5>
                                </li>
                            )}
                            {userData.status && (
                                <li key={"r"}>
                                    <img src={ProfileLovely} />
                                    <h5>{userData.status}</h5>
                                </li>
                            )}
                            {userData.website && (
                                <li key={"r"}>
                                    <img src={ProfileFlash} />
                                    <h5>{userData.website}</h5>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div>{/* //ТУТ МОЖЕТ БЫТЬ JUST DO IT */}</div>
                    <div className={styles.gallery}>
                        <h2>Фото</h2>
                        <Grid container>
                            {gallery && (
                                gallery.map((item: any) => {
                                    return (
                                        <Grid item md={6}>
                                            <DecryptedImg content={item.content}></DecryptedImg>
                                        </Grid>
                                    )
                                })
                            )}
                        </Grid>
                        {userData.PhotoCount > 0 && (
                            <div>
                                <h5>Показати ще {userData.PhotoCount}</h5>
                            </div>
                        )}
                    </div>
                </div>
            )}
            ;
        </>
    );
};

export default UserInfo;
