<template>
  <dark-mode-container class="flex-col-stretch h-full" >
    <global-logo :show-title="showTitle" :style="{ height:  '56px' }" />
    <vertical-menu />
  </dark-mode-container>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useAppStore } from '@/store';
import { GlobalLogo } from '../../index';
import { DarkModeContainer } from '@/components'
import VerticalMenu from './VerticalMenu.vue';

const app = useAppStore();
const showTitle = computed(() => !app.siderCollapse);
</script>
<style scoped>

</style>
