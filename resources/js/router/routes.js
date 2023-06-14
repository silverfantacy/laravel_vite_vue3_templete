const routes = [
    {
        path: "/",
        name: "index",
        component: () => import("@/views/Index.vue"),
        meta: {
            title: "首頁",
            scrollBehavior: "top",
        },
    },
    {
        path: "/about",
        name: "about",
        component: () => import("@/views/About.vue"),
        meta: {
            title: "關於",
            scrollBehavior: "top",
        },
    },
];

export default routes;
