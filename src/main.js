import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


const unsplash = new Unsplash({
    applicationId: "1RqzZ7eIhICxg9AULpOzQqM32mI1Lr1LCs_6SJfQxtU",
    secret: "ZuRhj4j5sxnWMuuuEjYyiYkAInSSu6eYVEAOojBQ0T8",
    callbackUrl: "{CALLBACK_URL}"
  });