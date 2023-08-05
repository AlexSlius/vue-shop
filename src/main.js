import './assets/styles/jquery.fancybox.min.css'
import './assets/styles/nouislider.min.css'
import './assets/styles/main.css'

import './assets/js/libs/jquery/jquery.min.js'
import './assets/js/libs/jquery.fancybox.min.js'
import './assets/js/libs/nouislider.min.js'
import './assets/js/libs/slick.min.js'
import './assets/js/main'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia());
app.use(router);

app.mount('#app');
