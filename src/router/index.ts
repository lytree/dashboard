import type { App } from 'vue';
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import { BasicLayout } from '@/layout/index'
import type { RouterScrollBehavior } from 'vue-router';

// import { useTabStore } from '@/store';
const { VITE_HASH_ROUTE = 'true', VITE_BASE_URL } = import.meta.env;
export const router = createRouter({
    history: VITE_HASH_ROUTE === 'true' ? createWebHashHistory(VITE_BASE_URL) : createWebHistory(VITE_BASE_URL),
    routes: [{
        name: 'root',
        path: '/',
        redirect: "/dashboard"
    },
    {
        name: 'dashboard',
        path: '/dashboard',
        component: BasicLayout,
        children: [
        ],
        meta: {
            title: '仪表盘',
            icon: 'mdi:monitor-dashboard',
            order: 1
        }
    },
    ],
    // scrollBehavior
});

/** setup vue router. - [安装vue路由] */
export async function setupRouter(app: App) {
    app.use(router);
    await router.isReady();
}



// export const scrollBehavior: RouterScrollBehavior = (to, from) => {
//     return new Promise(resolve => {
//         // const tab = useTabStore();

//         if (to.hash) {
//             const el = document.querySelector(to.hash);
//             if (el) {
//                 resolve({
//                     el,
//                     behavior: 'smooth'
//                 });
//             }
//         }

//         const { left, top } = tab.getTabScrollPosition(to.path);
//         const scrollPosition = {
//             left,
//             top
//         };
//         const { scrollLeft, scrollTop } = document.documentElement;

//         const isFromCached = Boolean(from.meta.keepAlive);
//         if (isFromCached) {
//             tab.recordTabScrollPosition(from.path, { left: scrollLeft, top: scrollTop });
//         }

//         const duration = !scrollPosition.left && !scrollPosition.top ? 0 : 350;

//         setTimeout(() => {
//             resolve(scrollPosition);
//         }, duration);
//     });
// };
