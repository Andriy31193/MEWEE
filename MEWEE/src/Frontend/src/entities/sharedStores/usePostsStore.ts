import { create } from "zustand";
import { posts } from "../../pages/home/dataHome";
import { ResponseCallback, ResponseDataCallback, decryptState, encryptState, pErrors } from "./utils";
import { $api, ENDPOINTS } from "../../shared/exportSharedMorules";
import { useAuthStore } from "./useAuthStore";
import { get } from "http";

interface ICreatePostRequest {
  authorId: string | undefined;
  title: string;
  content: string;
  attachment: string;
  location: string;
  category: string;
  type: string;
}

interface IPoststore {
  isLoading: boolean;
  posts: any;

  createPost: (callback: ResponseCallback, request: ICreatePostRequest) => Promise<void>;
  getPosts: (callback: ResponseCallback, id: any) => Promise<void>;
  savePost: (callback: ResponseCallback, postId: string) => Promise<void>;
  findPosts: (callback: ResponseCallback, query: string, pagination: any) => Promise<void>;
  likePost: (callback: ResponseCallback, postId: string) => Promise<void>;
  unLikePost: (callback: ResponseCallback, postId: string) => Promise<void>;
  getPostLikes: (callback: ResponseDataCallback, postId: string) => Promise<void>;
}

export const usePostsStore = create<IPoststore>((set) => ({
  isLoading: false,
  posts: null,

  createPost: async (callback: ResponseCallback, request: ICreatePostRequest) => {

    set({ isLoading: true });
    try {
      const response = await $api.post<any>(ENDPOINTS.USER.POST, request);


      if (response?.status == 200) {
        callback([]);
      } else {
        callback(pErrors(response.data.errors));
      }
    } catch (error: any) {
      callback(pErrors(['unknown_error']));

    }

    set({ isLoading: false });
  },
  getPosts: async (callback: ResponseCallback, id: any) => {

    set({ isLoading: true });

    try {
      const response = await $api.post<any>(ENDPOINTS.USER.GET_POSTS, { AuthorId: id, Type: 0 });


      if (response?.status == 200) {
        set({ posts: response.data });
        callback([]);
      } else {
        callback(pErrors(response.data.errors));
      }
    } catch (error: any) {
      callback(pErrors(['unknown_error']));

    }

    set({ isLoading: false });
  },
  savePost: async (callback: ResponseCallback, postId: string) => {

    set({ isLoading: true });

    try {
      const response = await $api.post<any>(ENDPOINTS.USER.SAVE_POST, { PostId: postId });

      if (response?.status == 200) {
        callback([]);
      } else {
        callback(pErrors(response.data.errors));
      }
    } catch (error: any) {
      callback(pErrors(['unknown_error']));

    }

    set({ isLoading: false });
  },
  findPosts: async (callback: ResponseCallback, query: string, pagination: any) => {
    set({ isLoading: true });
    set({ posts: null });

    try {
      const response = await $api.post<any>(ENDPOINTS.HOME.FIND_POSTS, { searchQuery: query, pagination: pagination });
      //console.log(response);


      if (response?.status == 200) {
        //console.log(response.data);
        set({ posts: response.data });
        callback([]);
      } else {
        callback(pErrors(response.data.errors));
      }
    } catch (error: any) {
      callback(pErrors(['unknown_error']));

    }



    set({ isLoading: false });
  },
  likePost: async (callback: ResponseCallback, postId: string) => {
    console.log("like-post");
    set({ isLoading: true });

    try {
      const response = await $api.post<any>(ENDPOINTS.HOME.LIKE_POST, { postId: postId });
    
      if (response?.status == 200) {
        console.log(response.data);
        callback([]);
      } else {
        callback(pErrors(response.data.errors));
      }
    } catch (error: any) {
      callback(pErrors(['unknown_error']));

    }

    set({ isLoading: false });
  },
  unLikePost: async (callback: ResponseCallback, postId: string) => {
    set({ isLoading: true });

    try {
      const response = await $api.post<any>(ENDPOINTS.HOME.UNLIKE_POST, { postId: postId });
    

      if (response?.status == 200) {
        callback([]);
      } else {
        callback(pErrors(response.data.errors));
      }
    } catch (error: any) {
      callback(pErrors(['unknown_error']));

    }


    set({ isLoading: false });
  },
  getPostLikes: async (callback: ResponseDataCallback, postId: string) => {

    set({ isLoading: true });

    try {
      const response = await $api.post<any>(ENDPOINTS.HOME.GET_POST_LIKES, { postId: postId, pagination: { page: 1, pageSize: 0 } });
      
      if (response?.status == 200) {
        callback(response.data, pErrors(response.data.errors));
      } else {
        callback(null, pErrors(response.data.errors));
      }
    } catch (error: any) {
      callback(null, pErrors(['unknown_error']));

    }



    set({ isLoading: false });
  },
}));
