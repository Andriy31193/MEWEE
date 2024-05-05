import { FC, useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import LocationIcon from "../../../assets/image/icons/LocationIcon.svg";
import LikePostIcon from "../../../assets/image/icons/LikePostIcon.svg";
import SentIcon from "../../../assets/image/icons/SentIcon.svg";
import CommentPostIcon from "../../../assets/image/icons/CommentPostIcon.svg";
import styles from "./feed_post_item.module.scss";
import { useAuthStore, usePostsStore, useThemeStore, useUserStore } from "../../../entities";
import CustomModalIcon from "../../сommon/custom-modal-icon/CustomModalIcon";
import CommentBarComponents from "../../comment-bar-components/CommentBarComponents";
import { useCommentStore } from "../../../entities/sharedStores/useCommentStore";
import { postDataTypes } from "../../../pages/post-show/dataPostShow.interface";
import { decryptImage } from "../../../entities/sharedStores/post-utils";
import CustomButton from "../../сommon/custom-button/customButton";
import { prfileItemDataTypes } from "../../../pages/profile/profileData.interface";

export const FeedPostItem: FC<{ item: postDataTypes }> = ({ item }) => {
  const [commentsHiden, setCommentsHiden] = useState<string | null>(null);
  const [author, setAuthor] = useState<any>(null);
  const { t } = useTranslation();
  const [imageSrc, setImageSrc] = useState<string>();
  const [avatar, setAvatar] = useState<any>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const { getProfile } = useUserStore();
  const { currentTheme } = useThemeStore();
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const { isLoading, likePost, unLikePost } = usePostsStore();
  const { getComments } = useCommentStore();
  const { getPostLikes } = usePostsStore();
  const [comments, setComments] = useState<any>(null);
  const isImage = (url: string) => {
    return /\.(jpeg|jpg|gif|png)$/i.test(url);
  };

  const isVideo = (url: string) => {
    return /\.(mp4|webm|ogg)$/i.test(url);
  };

  const onGetPostLikesResponse = (data: any, errors: string[]) => {

    if (errors.length == 0 && data !== null) {
      const result = data.filter((x: { postId: string }) => x.postId === item.id);

      setIsLiked(result.length > 0);
    }
  };

  const onResponse = (data: any, errors: string[]) => {

    if (errors.length == 0) {
      setComments(data);

    }
  }

  const onProfileResponse = (data: any, errors: string[]) => {

    if (errors.length == 0 && data !== null) {
      setAuthor(data);
      data.profileAvatar && decryptImage(data.profileAvatar).then(setAvatar).catch(console.error);
    }
  };

  const onLikePostResponse = (errors: string[]) => {

    if (errors.length == 0) {
      getPostLikes(onGetPostLikesResponse, item.id);
    }
  };

  const handleLikePost = () => {

    item.likesCount += !isLiked ? 1 : -1;

    (!isLiked) ? likePost(onLikePostResponse, item.id) : unLikePost(onLikePostResponse, item.id)
    
  };

  const updatePost = () => {
    getComments(onResponse, item.id, 1, 0);
    getPostLikes(onGetPostLikesResponse, item.id);
    getProfile(onProfileResponse, item.authorId);
    item.attachment && decryptImage(item.attachment).then(setImageSrc).catch(console.error);

  }
  const handleCommentClick = (postId: string) => {
    setCommentsHiden(commentsHiden === postId ? null : postId);
  };
  const onCommentsUpdated = () => {
    getComments(onResponse, item.id, 1, 0);
  }
  useEffect(() => {

    updatePost();

  }, []);


  // Check if currentTheme exists before accessing custom values
  const CustomBox = currentTheme?.components?.MuiIcon;
  // const fio = username?.split(' ');
  return (
    <div className={styles.div}>
      <div
        className={commentsHiden === null ? styles.sub_div : `${styles.sub_div} ${styles._sub_div_box_shadow}`}
        style={{
          backgroundColor: currentTheme?.mainPage.post.background,
        }}
      >
        <header>
          <div className={styles.header_div}>
            <div>
              <img src={avatar === "" ? "" : avatar} />
            </div>
            <div>
              <span
                style={{
                  color: currentTheme?.mainPage.post.colorText,
                }}
              >
                {author !== null ? author.username : ""}
              </span>
              <span
                style={{
                  color: currentTheme?.mainPage.post.thirdColorText,
                }}
              >
                {item.createdAt}
              </span>
              <div>
                <img src={LocationIcon} />
                <span
                  style={{
                    color: currentTheme?.mainPage.post.secondColorText,
                  }}
                >
                  {item.location}
                </span>
              </div>
            </div>
          </div>
          <CustomModalIcon id={0} links={[]} />
        </header>
        <main className={styles.main}>
          {item.attachment ? (
            <div>
              <img src={imageSrc} alt="Post Image" />
            </div>
          ) : isVideo(item.imageUrl) ? (
            <video
              className={styles.feed_post_video}
              ref={videoRef}
              autoPlay
              muted
            >
              <source src={item.imageUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <span>Unsupported media format</span>
          )}
        </main>
        <footer className={styles.footer}>
          <span
            style={{ color: currentTheme?.mainPage.post.colorText }}
          >
            {item.title}
          </span>
          <p>{item.description}</p>
          <nav className={styles.nav}>
            <CustomButton text={t("more")} />
            <div>
              <div>
                <img onClick={handleLikePost} style={{ filter: isLiked ? "saturate(3)" : "" }} src={LikePostIcon} />
                { !isLoading && <span>{item.likesCount}</span>}
              </div>
              <div>
                <img src={SentIcon} />
                <span></span>
              </div>
              <div>
                <img
                  onClick={() => handleCommentClick(item.id)}
                  src={CommentPostIcon}
                  style={{ filter: commentsHiden ? "saturate(3)" : "" }}
                />
                <span>{comments ? (comments.length > 0 ? comments.length - 1 : 0) : 0}</span>
              </div>
            </div>
          </nav>
        </footer>
      </div>
      <CommentBarComponents
        id={item.id}
        appearance={true}
        hiden={commentsHiden}
        commentDataRender={comments}
        onUpdated={onCommentsUpdated}
      />
    </div>
  );
};