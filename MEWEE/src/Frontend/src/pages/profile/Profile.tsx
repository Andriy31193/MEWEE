import { FC, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import ProfileItem from "./propfile-item/ProfileItem";
import UserInfo from "./user-info/UserInfo";
import { userInfoData } from "./profileData";
import { useParams } from "react-router-dom";
import { EnumProfileType, useAuthStore, useSearchBar, useUserStore } from "../../entities";

const Profile: FC<{}> = ( ) => {
  const [profileData, setProfileData] = useState<any>(null);
  const { getProfile, getFriends } = useUserStore();
  const { username } = useParams<{ username: string }>();
  const [friends, setFriendsData] = useState<any>(null);
  const { setTitle } = useSearchBar();

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
    setTitle("profile");
    getProfile(onProfileResponse, username ?? "#");
  }, []);

  return (
    <>
      {(profileData) && (
        <Grid container sx={{ padding: "0 1rem" }}>
          <Grid item md={3} sm={12}>
            <UserInfo profileType={EnumProfileType.User}  userData={profileData} />
          </Grid>
          <Grid item md={8} sm={12}>
            <ProfileItem profileType={EnumProfileType.User} profileData={profileData} friends={friends} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Profile;
