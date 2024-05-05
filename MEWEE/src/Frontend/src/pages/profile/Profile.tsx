import { FC, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import ProfileItem from "./propfile-item/ProfileItem";
import UserInfo from "./user-info/UserInfo";
import { userInfoData } from "./profileData";
import { useParams } from "react-router-dom";
import { useAuthStore, useUserStore } from "../../entities";

const Profile: FC = () => {
  const [profileData, setProfileData] = useState<any>(null);
  const [friends, setFriendsData] = useState<any>(null);
  const { getProfile, getFriends } = useUserStore();
  const { username } = useParams<{ username: string }>();

  const onProfileResponse = (data: any, errors: string[]) => {

    if (errors.length == 0 && data !== null) {
      setProfileData(data);
      getFriends(onFriendsResponse, data.id ?? "#");
    }
  };
  const onFriendsResponse = (data: any, errors: string[]) => {

    if (errors.length == 0 && data !== null) {
      setFriendsData(data);
    }
  };
  
  useEffect(() => {
    getProfile(onProfileResponse, username ?? "#");
  }, []);



  return (
    <>
      {profileData && (
        <Grid container >
          <Grid md={3}>
            <UserInfo userData={profileData} />
          </Grid>
          <Grid md={8}>
            <ProfileItem profileData={profileData} friends={friends} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Profile;
