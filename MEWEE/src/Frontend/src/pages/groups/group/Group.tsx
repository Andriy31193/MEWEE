import { FC, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { useUserStore } from "../../../entities";
import UserInfo from "../../profile/user-info/UserInfo";
import ProfileItem from "../../profile/propfile-item/ProfileItem";

const Profile: FC = () => {
  const [profileData, setProfileData] = useState<any>(null);
  const { getProfile, getFriends } = useUserStore();
  const { username } = useParams<{ username: string }>();
  const [friends, setFriendsData] = useState<any>(null);


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
      {(profileData) && (
        <Grid container sx={{ padding: "0 1rem" }}>
          <Grid item md={3} sm={12}>
            <UserInfo userData={profileData} />
          </Grid>
          <Grid item md={8} sm={12}>
            <ProfileItem profileData={profileData} friends={friends} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Profile;
