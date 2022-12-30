import { createApp } from 'vue'
import App from './App.vue'

import { setupAssets } from './plugin';
import { setupRouter } from './router'
import { setupStore } from './store'
import AppLoading from './components/AppLoading/index.vue'
async function setupApp() {
    // import assets: js、css
    setupAssets();
    // app loading
    const appLoading = createApp(AppLoading);

    appLoading.mount('#appLoading');

    const app = createApp(App);
    // store plugin: pinia
    setupStore(app);


    await setupRouter(app)
    // mount app
    app.mount('#app');
}
setupApp();