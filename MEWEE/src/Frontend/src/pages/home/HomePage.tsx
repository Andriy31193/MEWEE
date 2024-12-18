import React from "react";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useAuthStore } from "../../entities";
import { FeedsContainer } from "./feeds/FeedsContainer";
import { HomeNews } from "./news";
import "./home_page.css";
export const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const { isLoggedIn, role } = useAuthStore();
  // if (!isLoggedIn)
  //     return <Navigate to='/auth/login' />

  return (
    <Grid container>
      <div className="home-generic-container">
        <div className="home-main-container">
          <div className="home-generic-content-holder">
            <FeedsContainer />
            <HomeNews />
          </div>
        </div>
      </div>
    </Grid>
  );
  // <Grid container direction="column" alignItems="center">
  //     <h4>Username: </h4>
  //     <h6>Email: {email} | {isEmailConfirmed ? 'Email confirmed' : 'Confirm your email' }</h6>
  //     <h6>Role: {role}</h6>
  //     <Link href="/logout">{t('Logout')}</Link>
  // </Grid>
};
