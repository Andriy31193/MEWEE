import {
    IConfirmEmailRequest,
    ILoginRequest,
    IRegisterRequest,
    IUserData,
} from "../index";
import { $api, decodeJwtToken } from "../../shared/exportSharedMorules";
import { create } from "zustand";
import ENDPOINTS from "../../shared/api/endpoints";
import { persist } from "zustand/middleware";
import { AES, enc } from "crypto-js";
import { error } from "console";
import { ResponseCallback, ResponseDataCallback, decryptState, encryptState, pErrors } from "./utils";
import { AxiosInstance } from "axios";

interface IUserStore {



    isLoading: boolean;


    getProfile: (callback: ResponseDataCallback,
        userId: string
    ) => Promise<void>;

    updateProfile: (callback: ResponseCallback,
        profileAvatarData: string
    ) => Promise<void>;


    getFollowers: (callback: ResponseDataCallback,
      userId: string
    ) => Promise<void>;

    getFriends: (callback: ResponseDataCallback,
        userId: string
      ) => Promise<void>;

}
export const useUserStore = create<IUserStore>()(
    persist(
        (set, get) => ({
            isLoading: false,
            // id: null,
            // firstName: null,
            // secondName: null,
            // username: null,
            // email: null,
            // profileAvatar: null,
            // role: null,
            // platform: null,
            // isEmailConfirmed: null,
            // isLoggedIn: false,

            getProfile: async (callback: ResponseDataCallback, userId: string) => {

                try {
                    set({ isLoading: true });
                    const response = await $api.get<any>(ENDPOINTS.USER.GET_PROFILE_DATA + `/${userId}`);

                    if (response?.status === 200) {
                        callback(response.data, []);
                    } else {
                        callback(null, pErrors(response.data.errors));
                    }
                } catch (error: any) {
                    callback(null, pErrors(['unknown_error']));

                }
                set((state) => ({ ...state, isLoading: false }));
            },
            updateProfile: async (
                callback: ResponseCallback,
                profileAvatarData: string
            ) => {
                try {
                    const response = await $api.put<any>(
                        ENDPOINTS.USER.UPDATE_PROFILE_DATA,
                        { ProfileAvatar: profileAvatarData },
                        { withCredentials: true }
                    );
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
            getFollowers: async (callback: ResponseDataCallback, userId: string) => {

                try {
                    set({ isLoading: true });
                    const response = await $api.get<any>(ENDPOINTS.USER.GET_FOLLOWERS + `/${userId}`);

                    if (response?.status === 200) {
                        callback(response.data, []);
                    } else {
                        callback(null, pErrors(response.data.errors));
                    }
                } catch (error: any) {
                    callback(null, pErrors(['unknown_error']));

                }
                set((state) => ({ ...state, isLoading: false }));
            },



            getFriends: async (callback: ResponseDataCallback, userId: string) => {

                try {
                    set({ isLoading: true });
                    const response = await $api.get<any>(ENDPOINTS.USER.GET_FRIENDS + `/${userId}`);

                    if (response?.status === 200) {
                        callback(response.data, []);
                    } else {
                        callback(null, pErrors(response.data.errors));
                    }
                } catch (error: any) {
                    callback(null, pErrors(['unknown_error']));

                }
                set((state) => ({ ...state, isLoading: false }));
            },

        }),
        {
            name: "user",
            version: 1,
        }
    )
);
