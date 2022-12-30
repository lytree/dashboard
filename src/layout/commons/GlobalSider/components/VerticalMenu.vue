<template>
  <el-scrollbar class="flex-1-hidden">
    <!-- <el-menu :value="activeKey" :collapsed="app.siderCollapse" :collapsed-width="theme.sider.collapsedWidth"
      :collapsed-icon-size="22" :options="routeStore.menus" :expanded-keys="expandedKeys" :indent="18"
      @update:value="handleUpdateMenu"
      @update:expanded-keys="handleUpdateExpandedKeys" /> -->
    <el-menu>
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon>
          <document />
        </el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <setting />
        </el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { ElScrollbar, ElMenu, ElMenuItem, ElMenuItemGroup, ElSubMenu } from 'element-plus';
import { useRouterPush } from '@/composables';

// import { getActiveKeyPathsOfMenus } from '@/utils';

const route = useRoute();
const { routerPush } = useRouterPush();

const activeKey = computed(() => (route.meta?.activeMenu ? route.meta.activeMenu : route.name) as string);
const expandedKeys = ref<string[]>([]);

function handleUpdateMenu(_key: string, item: any) {
  const menuItem = item as GlobalMenuOption;
  routerPush(menuItem.routePath);
}

function handleUpdateExpandedKeys(keys: string[]) {
  expandedKeys.value = keys;
}

// watch(
//   () => route.name,
//   () => {
//     expandedKeys.value = getActiveKeyPathsOfMenus(activeKey.value, routeStore.menus);
//   },
//   { immediate: true }
// );
</script>
<style scoped>

</style>
