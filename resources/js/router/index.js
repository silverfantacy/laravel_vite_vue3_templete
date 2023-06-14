import { createRouter, createWebHashHistory } from "vue-router";

import routes from "./routes.js";

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {

    return next();
})

router.afterEach((to, from) => {
    const _title = to.meta.title || 'Laravel';
    if (_title) {
        window.document.title = _title;
    }
})

export default router;
