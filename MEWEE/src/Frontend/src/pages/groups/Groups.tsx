import { FC, useState, useEffect } from "react";
import styles from "./groups.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { decryptImage } from "../../entities/sharedStores/post-utils";
import { useGroupsStore } from "../../entities";

const Groups: FC<{}> = () => {
  const [avatarImages, setAvatarImages] = useState<string[]>([]);
  const navigate = useNavigate();
  const [data, setData] = useState<any>();
  const { getGroups } = useGroupsStore();

  
  
  const onGroupsResponse = (data: any, errors: string[]) => {
    if (errors.length == 0 && data !== null) {
      setData(data);
      console.log(data);
      fetchAvatars();
      
    }else
    console.error(errors);
  };
  useEffect(() => {
    getGroups(onGroupsResponse);
  }, []);


  const fetchAvatars = async () => {
    if (data) {
      const decryptedAvatars = await Promise.all(
        data.map(async (group: any) => {
          try {
            if (group.avatar) {
              const decryptedAvatar = await decryptImage(group.avatar);
              return decryptedAvatar;
            }
            return null;
          } catch (error) {
            console.error("Error decrypting image:", error);
            return null;
          }
        })
      );
      setAvatarImages(decryptedAvatars);
    }
  };

  return (
    <>
      {data && (
        <div className={styles.div}>
          <ul>
            {data &&
              data.map((group: any, index: number) => {
                return (
                  <li
                    key={group.id}
                    onClick={() => {
                      navigate("/group/" + group.id, { replace: false });
                      navigate(0);
                    }}
                  >
                    {avatarImages[index] && (
                      <img src={avatarImages[index]} alt="Decrypted Avatar" />
                    )}
                    <h2>{group.title}</h2>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Groups;
