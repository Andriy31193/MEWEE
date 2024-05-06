import { FC, useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as LocationIcon } from "../../../assets/image/icons/LocationIcon.svg";
import { ReactComponent as LikePostIcon } from"../../../assets/image/icons/LikePostIcon.svg";
import { ReactComponent as SentIcon } from "../../../assets/image/icons/SentIcon.svg";
import { ReactComponent as CommentPostIcon } from "../../../assets/image/icons/CommentPostIcon.svg";
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
  const showButton = item && item.content && item.content.length > 90;
  const videoRef = useRef<HTMLVideoElement>(null);
  const { getProfile } = useUserStore();
  const { currentTheme } = useThemeStore();
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const { isLoading, likePost, unLikePost } = usePostsStore();
  const { getComments } = useCommentStore();
  const { getPostLikes } = usePostsStore();
  const [comments, setComments] = useState<any>(null);
  const [showFullContent, setShowFullContent] = useState(false);
  const isImage = (url: string) => {
    return /\.(jpeg|jpg|gif|png)$/i.test(url);
  };

  const handleClickShow = () => {
    setShowFullContent(!showFullContent);
  };

  function formatTime(dateString: string) {
    const date = new Date(dateString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    return formattedTime;
  }



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
    <div className={styles.div} >
      <div
        className={commentsHiden === null ? styles.sub_div : `${styles.sub_div} ${styles._sub_div_box_shadow}`}
      >
        <header>
          <div className={styles.header_div}>
            <div>
              <img src={avatar === "" ? "" : avatar} />
            </div>
            <div>
              <span>{author !== null ? author.username : ""}</span>
              <span className={styles.span_date}>{formatTime(item.createdAt)}</span>
              <div>
                <LocationIcon />
                <span>{item.location}</span>
              </div>
            </div>
          </div>
          <CustomModalIcon id={0} links={[]} />
        </header>
        <main className={styles.main}>
          {item.attachment ? (
              <div>
                <div>
                  <div style={{backgroundImage: `url(${imageSrc})`}}></div>
                  <img src={imageSrc} alt="Post Image" />
                </div>
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
          <span>{item.title}</span>
          <div>{showFullContent ? (item?.content || '') : (item?.content?.slice(0, 90) || '')}</div>
          <nav className={styles.nav} style={!showButton ? { justifyContent: 'flex-end' } : {}}>
            {showButton && (
                <CustomButton text={showFullContent ? t("less") : t("more")} onClick={handleClickShow}/>
            )}
            <div>
              <div>
                <div>
                  <LikePostIcon onClick={handleLikePost}
                                style={{ color: isLiked ? currentTheme?.mainPage.post.secondActiveIcon
                                      :
                                      currentTheme?.mainPage.post.secondIcon
                  }}/>
                  {!isLoading && <span>{item.likesCount}</span>}
                </div>
                <div>
                  <SentIcon style={{color: currentTheme?.mainPage.post.secondIcon}}/>
                </div>
                <div>
                  <CommentPostIcon onClick={() => handleCommentClick(item.id)}
                                   style={{ color: commentsHiden ? currentTheme?.mainPage.post.secondActiveIcon
                                         :
                                         currentTheme?.mainPage.post.secondIcon
                                   }}
                  />
                  <span>{comments ? (comments.length > 0 ? comments.length  : 0) : 0}</span>
                </div>
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