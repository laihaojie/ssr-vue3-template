// store.ts
import { InjectionKey } from "vue";
import { RouteLocationNormalized } from "vue-router";
import { createStore as _createStore, Store } from "vuex";
import { Get } from "./utils/request";

// 为 store state 声明类型D
export interface State {
    client: string[];
    server: string[];
    weather: any;
}

export interface AsyncDataParam {
    store: Store<State>;
    route: RouteLocationNormalized;
}

// // 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol();

export function createStore() {
    const store = _createStore<State>({
        state: {
            client: [],
            server: [],
            weather: { weather: [] },
        },
        mutations: {
            setClient(state, data) {
                state.client = data;
            },
            setServer(state, data) {
                state.server = data;
            },
            setWeather(state, data) {
                state.weather = data
            }
        },
        actions: {
            AYSNC_CLIENT({ commit }) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        commit("setClient", ["vue3", "vue-router", "vuex"]);
                        resolve(true);
                    }, 20);
                });
            },
            ASYNC_SERVER({ commit }) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        commit("setServer", ["vite", "express", "serialize-javascript"]);
                        resolve(true);
                    }, 2000);
                });
            },
            async ASYNC_WEATHER({ commit }) {
                const res = await Get('https://api-admin-zt.lingman.tech/api/public/calendar')
                commit("setWeather", res)
                return true
            },
            // ASYNC_WEATHER({ commit }) {
            //     return new Promise((resolve, reject) => {
            //         setTimeout(() => {
            //             commit("setWeather", { weather: 5 });
            //             resolve(true);
            //         }, 2000);
            //     });
            // },
        },
    });
    // 替换state
    // @ts-ignore
    if (!import.meta.env.SSR && window && window.__INITIAL_STATE__) {
        // @ts-ignore
        store.replaceState(window.__INITIAL_STATE__);
    }

    return { store };
}
