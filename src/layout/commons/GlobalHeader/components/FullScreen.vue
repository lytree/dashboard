<template>
  <hover-container class="w-40px h-full" tooltip-content="全屏" @click="toggle">
    <icon-gridicons-fullscreen-exit v-if="isFullscreen" class="text-18px" />
    <icon-gridicons-fullscreen v-else class="text-18px" />
  </hover-container>
</template>

<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core';
import { HoverContainer } from '@/components'
import IconGridiconsFullscreenExit from '~icons/gridicons/fullscreen-exit'
import IconGridiconsFullscreen from '~icons/gridicons/fullscreen'
const { isFullscreen, toggle } = useFullscreen();
</script>
<style scoped>

</style>
