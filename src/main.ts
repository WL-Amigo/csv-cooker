import { createApp } from 'vue'
import App from './App.vue'
import { installComponent } from './setup/components';
import './assets/global.css'
import { installFontawesome } from './setup/fontawesome';

const app = createApp(App);
installComponent(app);
installFontawesome(app);
app.mount('#app')
