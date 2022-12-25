<template>
    <div v-if="showTooltip">
        <el-tooltip :placement="placement" :content="tooltipContent" trigger="hover">
            <div class="flex-center h-full cursor-pointer dark:hover:bg-[#333]" :class="contentClassName">
                <slot></slot>
            </div>
        </el-tooltip>
    </div>
    <div v-else class="flex-center cursor-pointer dark:hover:bg-[#333]" :class="contentClassName">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import type { Placement } from 'element-plus';
import { ElTooltip } from 'element-plus';

interface Props {
    /** tooltip显示文本 */
    tooltipContent?: string;
    /** tooltip的位置 */
    placement?: Placement;
    /** class类 */
    contentClass?: string;
}
const props = withDefaults(defineProps<Props>(), {
    tooltipContent: '',
    placement: 'bottom',
    contentClass: '',
    inverted: false
});

const showTooltip = computed(() => Boolean(props.tooltipContent));

const contentClassName = computed(
    () => `${props.contentClass} 'hover:bg-[#f6f6f6]'`
);
</script>
<style scoped>

</style>
