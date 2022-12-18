<template>
  <hover-container tooltip-content="github" class="w-40px h-full" @click="handleClickLink">
    <icon-mdi-github class="text-20px" />
  </hover-container>
</template>

<script lang="ts" setup>
import { HoverContainer } from '@/components'
import IconMdiGithub from '~icons/mdi/github'
function handleClickLink() {
  window.open('https://github.com/honghuangdc/soybean-admin', '_blank');
}
</script>
<style scoped>

</style>
