<template>
  <hover-container class="w-40px" tooltip-content="主题模式">
    <dark-mode-switch :dark="isDark" class="wh-full" @update:dark="toggleDark()" />
  </hover-container>
</template>

<script lang="ts" setup>

import { DarkModeSwitch, HoverContainer } from "@/components"
import { isDark, toggleDark } from '@/composables';

</script>
<style scoped>

</style>
