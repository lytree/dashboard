<template>
  <div ref="tabRef" class="flex items-end h-full">
    <chrome-tab
      v-for="(item, index) in tab.tabs"
      :key="item.path"
      :is-active="tab.activeTab === item.path"
      :primary-color="theme.themeColor"
      :closable="item.path !== tab.homeTab.path"
      :dark-mode="theme.darkMode"
      :class="{ '!mr-0': index === tab.tabs.length - 1 }"
      :is-last="index === tab.tabs.length - 1"
      @click="tab.handleClickTab(item.path)"
      @close="tab.removeTab(item.path)"
      @contextmenu="handleContextMenu($event, item.path)"
    >
      <Icon v-if="item.meta.icon" :icon="item.meta.icon" class="inline-block align-text-bottom mr-4px text-16px" />
      {{ item.meta.title }}
    </chrome-tab>
  </div>
  <context-menu
    v-model:visible="dropdown.visible"
    :current-path="dropdown.currentPath"
    :x="dropdown.x"
    :y="dropdown.y"
  />
</template>

<script setup lang="ts">
import { ref, reactive, nextTick, watch } from 'vue';
import { useEventListener } from '@vueuse/core';
import { Icon } from '@iconify/vue';
import { useThemeStore, useTabStore } from '@/store';
import { setTabRoutes } from '@/utils';
import ChromeTab from '@/components/custom/ChromeTab.vue';
import { ContextMenu } from './components';

interface Emits {
  (e: 'scroll', clientX: number): void;
}

const emit = defineEmits<Emits>();

const theme = useThemeStore();
const tab = useTabStore();

// 获取当前激活的tab的clientX
const tabRef = ref<HTMLElement>();
async function getActiveTabClientX() {
  await nextTick();
  if (tabRef.value && tabRef.value.children.length && tabRef.value.children[tab.activeTabIndex]) {
    const activeTabElement = tabRef.value.children[tab.activeTabIndex];
    const { x, width } = activeTabElement.getBoundingClientRect();
    const clientX = x + width / 2;
    setTimeout(() => {
      emit('scroll', clientX);
    }, 50);
  }
}

const dropdown = reactive({
  visible: false,
  x: 0,
  y: 0,
  currentPath: ''
});
function showDropdown() {
  dropdown.visible = true;
}
function hideDropdown() {
  dropdown.visible = false;
}
function setDropdown(x: number, y: number, currentPath: string) {
  Object.assign(dropdown, { x, y, currentPath });
}

/** 点击右键菜单 */
async function handleContextMenu(e: MouseEvent, path: string) {
  e.preventDefault();
  const { clientX, clientY } = e;
  hideDropdown();
  setDropdown(clientX, clientY, path);
  await nextTick();
  showDropdown();
}

watch(
  () => tab.activeTabIndex,
  () => {
    getActiveTabClientX();
  },
  {
    immediate: true
  }
);

/** 页面离开时缓存多页签数据 */
useEventListener(window, 'beforeunload', () => {
  setTabRoutes(tab.tabs);
});
</script>
<style scoped></style>
