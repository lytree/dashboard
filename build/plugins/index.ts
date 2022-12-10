import type { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import html from './html';
import unplugin from './unplugin';
import visualizer from './visualizer';
import compress from './compress';
import mock from './mock';
import progress from 'vite-plugin-progress';
/**
 * vite插件
 * @param viteEnv - 环境变量配置
 */
export function setupVitePlugins(viteEnv: ImportMetaEnv): (PluginOption | PluginOption[])[] {
  console.log(viteEnv)
  const plugins = [vue(), vueJsx(), html(viteEnv), ...unplugin(viteEnv), mock, progress()];

  if (viteEnv.VITE_VISUALIZER === 'true') {
    plugins.push(visualizer as PluginOption);
  }
  if (viteEnv.VITE_COMPRESS === 'true') {
    plugins.push(compress(viteEnv));
  }
  return plugins;
}
