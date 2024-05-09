import { FC, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import styles from "./events.module.scss";
import { decryptImage } from "../../../entities/sharedStores/post-utils";
import Sidebar from "../sidebar/Sidebar";
import GroupItem from "../group-item/GroupItem";
import { useGroupsStore, usePostsStore, useSearchBar } from "../../../entities";
import { dataSideBar } from "../groupData";
import { FeedPost } from "../../../features/exportFeaturesComponents";
import EventItem from "./events-item/EventItem";

const Events: FC<{}> = () => {
  const [avatarImages, setAvatarImages] = useState<string[]>([]);
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('Interesting');
  const [data, setData] = useState<any>();
  const { findPosts } = usePostsStore();
  const { setTitle } = useSearchBar();



  const onResponse = (data:any, errors: string[]) => {
    if (errors.length == 0 && data != null) {
      //fetchAvatars();
      setData(data);
      console.log(data);
    } else
      console.error(errors);
  };
  useEffect(() => {
    setTitle("events");
    findPosts(onResponse, "", { page: 0, pageSize: 10 }, false);
  }, []);


  // const fetchAvatars = async () => {
  //   if (data) {
  //     const decryptedAvatars = await Promise.all(
  //       data.map(async (group: any) => {
  //         try {
  //           if (group.avatar) {
  //             const decryptedAvatar = await decryptImage(group.avatar);
  //             return decryptedAvatar;
  //           }
  //           return null;
  //         } catch (error) {
  //           console.error("Error decrypting image:", error);
  //           return null;
  //         }
  //       })
  //     );
  //     setAvatarImages(decryptedAvatars);
  //   }
  // };
  const onCategoryChanged = (id: string) => {
    setSelectedCategory(id);
  }

  const sideBarData = dataSideBar();

  return (
    <>
    <Grid container className={styles.eventsContainer}>
      {/* Sidebar */}
      <Grid item md={3}>
      <Sidebar data={sideBarData} onCategoryChanged={onCategoryChanged} />
      </Grid>

      {/* Event items */}
      <Grid item md={9}>
        <Grid container spacing={10}>
          {data &&
            data.map((item: any) => (
              <Grid key={item.id} item xs={12} sm={2} md={5}>
                <EventItem item={item} />
              </Grid>
              
            ))}
        </Grid>
      </Grid>
    </Grid>
  </>
  );
};

export default Events;
