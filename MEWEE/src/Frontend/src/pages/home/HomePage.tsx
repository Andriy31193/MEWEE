import React from "react";
import { CircularProgress, Grid, LinearProgress } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useAuthStore } from "../../entities";
import { HomeFeed } from "./../../widgets/home-feeds/HomeFeed";
import { HomeNews } from "./home-news/HomeNews";
import CreateChatTest from "../create-chat-test/CreateChatTest";
export const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const { isLoggedIn, role } = useAuthStore();
  // if (!isLoggedIn)
  //     return <Navigate to='/auth/login' />

  //<CreateChatTest></CreateChatTest>
  return (
    <Grid container>
      <Grid item sm={12}>
        <HomeFeed />
      </Grid>
      <Grid item sm={4}>
        <HomeFeed />
      </Grid>
    </Grid>
  );
};
