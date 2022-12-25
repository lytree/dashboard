<template>
  <dark-mode-container class="global-header flex-y-center h-full">
    <global-logo :show-title="true" class="h-full w-128px" />
    <div class="flex-1-hidden flex-y-center h-full">
      <menu-collapse />
      <!-- <global-breadcrumb /> -->
    </div>
    <div class="flex justify-end h-full">
      <!-- <global-search />
      <github-site />
      <full-screen />-->
      <theme-mode />
      <user-avatar />
    </div>
  </dark-mode-container>
</template>

<script setup lang="ts">
import { DarkModeContainer } from '@/components'
import GlobalLogo from '../GlobalLogo/index.vue';
import GlobalSearch from '../GlobalSearch/index.vue';
import {
  MenuCollapse,
  // GlobalBreadcrumb,
  // GithubSite,
  // FullScreen,
  ThemeMode,
  UserAvatar
} from './components';

interface Props {
  // /** 显示logo */
  // showLogo: GlobalHeaderProps['showLogo'];
  // /** 显示头部菜单 */
  // showHeaderMenu: GlobalHeaderProps['showHeaderMenu'];
  // /** 显示菜单折叠按钮 */
  // showMenuCollapse: GlobalHeaderProps['showMenuCollapse'];
}

defineProps<Props>();

</script>
<style scoped>
.global-header {
  box-shadow: 0 1px 2px rgb(0 21 41 / 8%);
}
</style>
