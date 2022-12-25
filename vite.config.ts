import { defineConfig, loadEnv } from 'vite'
import { createViteProxy, getRootPath, getSrcPath, setupVitePlugins } from './build';
import { getServiceEnvConfig } from './typings/env-config';
// https://vitejs.dev/config/
export default defineConfig(config => {
  const viteEnv = loadEnv(config.mode, process.cwd()) as unknown as ImportMetaEnv;


  const rootPath = getRootPath();
  const srcPath = getSrcPath();

  const isOpenProxy = viteEnv.VITE_HTTP_PROXY === 'true';
  const envConfig = getServiceEnvConfig(viteEnv);
  return {
    base: viteEnv.VITE_BASE_URL,
    resolve: {
      alias: {
        '~': rootPath,
        '@': srcPath,
      }
    },
    plugins: setupVitePlugins(viteEnv),
    server: {
      host: '0.0.0.0',
      port: 3200,
      open: true,
      proxy: createViteProxy(isOpenProxy, envConfig)
    },
    optimizeDeps: {
      include: [

      ]
    },
    build: {
      reportCompressedSize: false,
      sourcemap: false,
      commonjsOptions: {
        ignoreTryCatch: false
      }
    }
  }
})
