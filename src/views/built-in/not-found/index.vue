<template>
    <div class="flex-col-center wh-full">
        <div class="text-400px text-primary">
            <icon-local-not-found />
        </div>
        <router-link :to="{ name: 'home' }">
            <n-button type="primary">回到首页</n-button>
        </router-link>
    </div>
</template>
  
<script lang="ts" setup>
import IconLocalNotFound from '~icons/local/not-found'
</script>

<style scoped>

</style>
  