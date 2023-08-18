import './assets/styles/jquery.fancybox.min.css'
import './assets/styles/nouislider.min.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './assets/styles/main.css'

import './assets/js/libs/jquery/jquery.min.js'
import './assets/js/libs/jquery.fancybox.min.js'
import './assets/js/libs/nouislider.min.js'
import './assets/js/libs/slick.min.js'
import './assets/js/main'

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
