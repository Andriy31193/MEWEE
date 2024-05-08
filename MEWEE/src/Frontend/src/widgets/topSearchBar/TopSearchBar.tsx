import { useErrors, usePostsStore, useThemeStore } from "../../entities";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import { ReactComponent as IconPlus } from "./images/icon_plus.svg";
import { ReactComponent as IconFilter } from "./images/icon_filter.svg";
import { ReactComponent as IconNothification } from "./images/icon_nothification.svg";
import { ReactComponent as IconMessages } from "./images/icon_messages.svg";
import { TopSearchBarItem } from "./components/topSearchBarItem/TopSearchBarItem";
import AddPost from "./components/add-post/AddPost";
import { CircularProgress } from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";
import styles from "./top_search_bar.module.scss";

export const TopSearchBar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  // const { username, email, isLoggedIn, role, isEmailConfirmed } = useAuthStore();
  const [errors, setErrors, setAutoClearErrors] = useErrors();
  const { currentTheme } = useThemeStore();
  const { isLoading, findPosts, getPosts } = usePostsStore();
  // const fio = username?.split(' ');
  const location = useLocation();

  const activeIcon = (path: string) => {
    return location.pathname.includes(path);
  }

  const formik = useFormik({
    initialValues: { prompt: "" },

    onSubmit: () => {
      findPosts(onResponse, formik.values.prompt, { page: 0, pageSize: 10 });
    },

  });

  const onResponse = (errors: string[]) => {
    setAutoClearErrors(errors);

    console.log(errors);
    if (errors.length == 0) console.log("all good");
  };

  return (
    <div className={styles.top_search_bar_container}>
      <div className={styles.top_search_bar_title_container}>
        <span className={styles.top_search_bar_title} onClick={() => navigate('/feed')}>{t("main")}</span>
      </div>
      <div className={styles.input_search_container}>
        <label className={styles.label_search_bar_style}>
          <input
              className={styles.input_search_bar}
              type="text"
              name="prompt"
              id="prompt"
              value={formik.values.prompt}
              onChange={formik.handleChange}
              placeholder={t("search") + "..."}
          />
          <span className={`${styles.input_search_bar_icon} ${styles.search_icon_default}`}
                onClick={() => formik.handleSubmit()} />
        </label>
      </div>
          {isLoading && <CircularProgress size={"1rem"}></CircularProgress>}
      <div className={styles.top_search_bar_tools_container}>
        <AddPost />
        <TopSearchBarItem onClick={() => navigate('/feed')} icon={<IconFilter />}
                          isActive={false}/>
        <TopSearchBarItem onClick={() => navigate('/feed')} icon={<IconNothification />}
                          isActive={false}/>
        <TopSearchBarItem onClick={() => navigate('/chat')} icon={<IconMessages />}
                          isActive={activeIcon("/chat")}/>
      </div>
    </div>
  );
};
