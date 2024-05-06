import React, { useEffect } from "react";
import { CircularProgress, Grid, LinearProgress } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useAuthStore, usePostsStore } from "../../entities";
import { HomeFeed } from "./../../widgets/home-feeds/HomeFeed";
import { HomeNews } from "./home-news/HomeNews";
import CreateChatTest from "../create-chat-test/CreateChatTest";
import { Navigate } from "react-router-dom";

export const HomePage: React.FC = () => {
  const { isLoggedIn, role } = useAuthStore();

  if (!isLoggedIn)
    return <Navigate to='/auth/login' />

  const { posts, findPosts } = usePostsStore();

  const onResponse = (errors: string[]) => {
    if (errors.length == 0) { }
  };

  useEffect(() => {
    findPosts(onResponse, "", { page: 0, pageSize: 10 });
  }, []);
  return (
    <Grid container direction="row">
      <Grid item sm={8}>
        <HomeFeed posts={posts} />
      </Grid>
      <Grid item sm={4}>
        <HomeNews posts={posts} />
      </Grid>
    </Grid>
  );
};
