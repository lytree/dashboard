<template>
  <el-scrollbar class="flex-1-hidden">
    <el-menu :value="activeKey" :collapsed="app.siderCollapse" :collapsed-width="theme.sider.collapsedWidth"
      :collapsed-icon-size="22" :options="routeStore.menus" :expanded-keys="expandedKeys" :indent="18"
      :inverted="theme.sider.inverted" @update:value="handleUpdateMenu"
      @update:expanded-keys="handleUpdateExpandedKeys" />
  </el-scrollbar>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { ElScrollbar, ElMenu } from 'element-plus';
import { useRouterPush } from '@/composables';
import { getActiveKeyPathsOfMenus } from '@/utils';

const route = useRoute();
const { routerPush } = useRouterPush();

const activeKey = computed(() => (route.meta?.activeMenu ? route.meta.activeMenu : route.name) as string);
const expandedKeys = ref<string[]>([]);

function handleUpdateMenu(_key: string, item: MenuOption) {
  const menuItem = item as GlobalMenuOption;
  routerPush(menuItem.routePath);
}

function handleUpdateExpandedKeys(keys: string[]) {
  expandedKeys.value = keys;
}

watch(
  () => route.name,
  () => {
    expandedKeys.value = getActiveKeyPathsOfMenus(activeKey.value, routeStore.menus);
  },
  { immediate: true }
);
</script>
<style scoped>

</style>
