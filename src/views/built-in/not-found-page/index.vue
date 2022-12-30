<template>
    <div class="flex-col-center wh-full">
        <div class="text-400px text-primary">
            <icon-local-service-error />
        </div>
        <router-link :to="{ name: 'home' }">
            <n-button type="primary">回到首页</n-button>
        </router-link>
    </div>
</template>
  
<script lang="ts" setup>
import IconLocalServiceError from '~icons/local/service-error'
</script>

<style scoped>

</style>