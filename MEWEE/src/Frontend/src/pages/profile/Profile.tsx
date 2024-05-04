import { FC, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import ProfileItem from "./propfile-item/ProfileItem";
import UserInfo from "./user-info/UserInfo";
import { userInfoData } from "./profileData";
import { useParams } from "react-router-dom";
import { useAuthStore, useUserStore } from "../../entities";

const Profile: FC = () => {
  const [profileData, setProfileData] = useState<any>(null);
  const { isLoading, getProfile } = useUserStore();
  const { username } = useParams<{ username: string }>();

  const onProfileResponse = (data: any, errors: string[]) => {

    if (errors.length == 0 && data !== null) {
      setProfileData(data);
    }
  };
  
  useEffect(() => {
    getProfile(onProfileResponse, username ?? "#");
  }, []);



  return (
    <>
      {profileData && (
        <Grid style={{ marginTop: "8rem" }} container>
          <Grid md={4}>
            <UserInfo userData={profileData} />
          </Grid>
          <Grid md={8}>
            <ProfileItem profileData={profileData} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Profile;
