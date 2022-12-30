<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import { RouterView } from 'vue-router'

</script>

<template>
  <el-config-provider>
    <router-view />
  </el-config-provider>
</template>

<style lang="css" scoped>

</style>
