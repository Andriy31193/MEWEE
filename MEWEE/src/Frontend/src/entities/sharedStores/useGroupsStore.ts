import { $api } from "../../shared/exportSharedMorules";
import { create } from "zustand";
import ENDPOINTS from "../../shared/api/endpoints";
import { persist } from "zustand/middleware";
import { ResponseCallback, ResponseDataCallback, pErrors } from "./utils";

interface IGroupStore {

    isLoading: boolean;

    createGroup: (callback: ResponseDataCallback, title: string, avatar: string ) => Promise<void>;
    deleteGroup: (callback: ResponseCallback, groupId: string) => Promise<void>;
    getGroups: (callback: ResponseDataCallback) => Promise<void>;
    

}
export const useGroupsStore = create<IGroupStore>()(
    persist(
        (set, get) => ({
            isLoading: false,
            createGroup: async (callback: ResponseDataCallback, title: string, avatar: string) => {

                try {
                    set({ isLoading: true });
                    const response = await $api.post<any>(ENDPOINTS.GROUPS.CREATE_GROUP, {Title: title, Avatar: avatar});

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
            deleteGroup: async (callback: ResponseDataCallback, groupId: string) => {

                try {
                    set({ isLoading: true });
                    const response = await $api.post<any>(ENDPOINTS.GROUPS.CREATE_GROUP, {GroupId: groupId});

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
            getGroups: async (callback: ResponseDataCallback) => {

                try {
                    set({ isLoading: true });
                    const response = await $api.get<any>(ENDPOINTS.GROUPS.GET_GROUPS);

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
