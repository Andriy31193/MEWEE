import { FC, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { EnumProfileType, useGroupsStore, useUserStore } from "../../../entities";
import UserInfo from "../../profile/user-info/UserInfo";
import ProfileItem from "../../profile/propfile-item/ProfileItem";

const Group: FC = () => {
  const [profileData, setProfileData] = useState<any>(null);
  const { getProfile, getFriends } = useUserStore();
  const { getGroup } = useGroupsStore();
  const { id } = useParams<{ id: string }>();
  const [friends, setFriendsData] = useState<any>(null);


  const onProfileResponse = (data: any, errors: string[]) => {
    if (errors.length == 0 && data !== null) {
      setProfileData(data);
      console.log("group:",data);
      getFriends(onFriendsResponse, data.id ?? "#");

    }
  };
  const onFriendsResponse = (data: any, errors: string[]) => {
    if (errors.length == 0 && data !== null) {
      setFriendsData(data);
    }
  };


  useEffect(() => {
    getGroup(onProfileResponse, id ?? "");
  }, []);

  return (
    <>
      {(profileData) && (
        <Grid container sx={{ padding: "0 1rem" }}>
          <Grid item md={3} sm={12}>
            <UserInfo profileType={EnumProfileType.Group} userData={profileData} />
          </Grid>
          <Grid item md={8} sm={12}>
            <ProfileItem profileType={EnumProfileType.Group} profileData={profileData} friends={friends} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Group;
