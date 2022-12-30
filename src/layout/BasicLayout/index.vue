<template>
    <div class="flex flex-col w-full h-full min-w-[1200px]">
        <header class="flex-shrink-0 w-full box-border duration-300 ease-in-out fixed z-[1001] min-w-[1200px] h-[56px]"
            :style="psSiderStyle">
            <global-header />
        </header>
        <div class="flex-shrink-0 w-full box-border duration-300 ease-in-out z-[999] fixed top-[56px] min-w-[1200px] h-[56px]"
            :style="psSiderStyle">
            <!-- <global-tab /> -->
            tab
        </div>
        <aside class="fixed left-0 top-0 box-border h-full transition-all z-[1000]" :style="siderStyle">
            <global-sider />
        </aside>
        <main class="grow w-full box-border duration-300 ease-in-out overflow-hidden pt-[112px]" :style="psSiderStyle">
            <!-- <global-content /> -->
            content
        </main>
        <footer
            class="z-[999] box-border w-full left-0 bottom-0 duration-300 ease-in-out flex-shrink-0 min-w-[1200px] h-[56px] pl-[0] fixed">
            <global-footer />
        </footer>
    </div>
</template>
<script setup lang="ts">
import { GlobalFooter, GlobalHeader, GlobalSider } from '../commons';
import { useAppStore } from '@/store';
import { computed } from 'vue';

const app = useAppStore();

/** 侧边宽度 */

const siderStyle = computed(() => {
    const width = app.siderCollapse ? 0 : 200;
    return `width:${width}px;`;
});
const psSiderStyle = computed(() => {
    const width = app.siderCollapse ? 0 : 200;
    return `padding-left:${width}px;`;
});
</script>
<style>

</style>