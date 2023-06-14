// import './bootstrap';

import { createApp } from 'vue'

import App from '@/App.vue'

import router from '@/router'

import pinia from './store'

import { initFlowbite } from 'flowbite'

createApp(App)
    .use(router)
    .use(pinia)
    .use(initFlowbite)
    .mount("#app")
