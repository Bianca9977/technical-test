import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/tailwind.css';
import './assets/styles/fonts.css';
import './assets/styles/main.css';
import {createRouter, createWebHistory} from 'vue-router';
import Homepage from './components/LandingPage.vue';
import Castigatori from './components/WinnersPage.vue';
import Regulament from './components/RulesPage.vue';

const routes = [
    { path: '/', component: Homepage },
    { path: '/castigatori', component: Castigatori },
    { path: '/regulament', component: Regulament}
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes
});
  

const app= createApp(App)

app.use(router)

app.mount('#app')
