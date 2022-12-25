<template>
  <dark-mode-container class="global-header flex-y-center h-full">
    <div class="flex-1-hidden flex-y-center h-full">
      <menu-collapse />
      <!-- <global-breadcrumb /> -->
    </div>
    <div class="flex justify-end h-full">
      <!-- <global-search />
      <github-site />
      <full-screen />-->
      <system-message />
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
  SystemMessage,
  ThemeMode,
  UserAvatar
} from './components';

</script>
<style scoped>
.global-header {
  box-shadow: 0 1px 2px rgb(0 21 41 / 8%);
}
</style>
