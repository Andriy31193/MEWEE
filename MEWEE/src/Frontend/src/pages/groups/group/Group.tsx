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


  const profileButtonsData = [
    {
      id: 1,
      text: "posts",
    },
    {
      id: 3,
      text: "followers",
    },
  ];
  const onGetGroupResponse = (data: any, errors: string[]) => {
    if (errors.length == 0 && data !== null) {
      const group = data.group;
      const fetchedData =
      {
        id: group.id,
        avatar: group.avatar,
        category:  group.category,
        username: group.nickname,
        website: `@${group.nickname}`,
        title: group.title,
        followersCount: data.members.length
    };
    console.log("fetched",fetchedData);
      setProfileData(fetchedData);
      setFriendsData(data.members);
      console.log("group:",data);
      //getFriends(onFriendsResponse, group.id ?? "#");

    }
  };
  const onFriendsResponse = (data: any, errors: string[]) => {
    if (errors.length == 0 && data !== null) {

    }
  };


  useEffect(() => {
    getGroup(onGetGroupResponse, id ?? "");
  }, []);

  return (
    <>
      {(profileData) && (
        <Grid container sx={{ padding: "0 1rem" }}>
          <Grid item md={3} sm={12}>
            <UserInfo profileType={EnumProfileType.Group} userData={profileData} gallery={[]} onPhotoUploaded={()=>{}} />
          </Grid>
          <Grid item md={8} sm={12}>
            <ProfileItem  profileButtonsData={profileButtonsData} photos={[]} profileType={EnumProfileType.Group} profileData={profileData} friends={friends} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Group;
