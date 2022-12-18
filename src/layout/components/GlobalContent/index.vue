<template>
  <div :class="{ 'p-16px': showPadding }"
    class="h-full bg-[#f6f9f8] dark:bg-[#101014] transition duration-300 ease-in-out">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-slide" mode="out-in" :appear="true" @before-leave="handleBeforeLeave"
        @after-enter="handleAfterEnter">
        <component :is="Component" v-if="app.reloadFlag" :key="route.path" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useAppStore } from '@/store';
interface Props {
  /** 显示padding */
  showPadding?: boolean;
}

interface Emits {
  /** 禁止主体溢出 */
  (e: 'hide-main-overflow', hidden: boolean): void;
}

withDefaults(defineProps<Props>(), {
  showPadding: true
});

const emit = defineEmits<Emits>();

const app = useAppStore();

function handleBeforeLeave() {
  emit('hide-main-overflow', true);
}
function handleAfterEnter() {
  emit('hide-main-overflow', false);
}
</script>
<style scoped>

</style>
