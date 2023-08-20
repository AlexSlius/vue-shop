import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './assets/styles/main.css'

import directiveVMax from "@/directives/vMax";
import directiveInputPrice from "@/directives/inputPrice";

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia());
app.directive('maxlen', directiveVMax);
app.directive('maxminnumber', directiveInputPrice);
app.use(router);

app.mount('#app');
