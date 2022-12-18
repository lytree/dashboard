import { createApp } from 'vue'
import App from './App.vue'
import { setupAssets } from './plugin';
import { setupRouter } from './router'
import AppLoading from './components/apploading/index.vue'
async function setupApp() {
    // import assets: js、css
    setupAssets();
    // app loading
    const appLoading = createApp(AppLoading);

    appLoading.mount('#appLoading');

    const app = createApp(App);

    await setupRouter(app)
    // mount app
    app.mount('#app');
}
setupApp();