<template>
    <div class="flex-col-center wh-full">
        <div class="text-400px text-primary">
            <icon-local-no-permission />
        </div>
        <router-link :to="{ name: 'home' }">
            <n-button type="primary">回到首页</n-button>
        </router-link>
    </div>
</template>
  
<script lang="ts" setup>
import IconLocalNoPermission from '~icons/local/no-permission'
</script>

<style scoped>

</style>
  