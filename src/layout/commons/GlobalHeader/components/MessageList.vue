<template>
    <el-scrollbar class="max-h-360px">
        <el-descriptions v-for="(item, index) in list" :key="item.id"
            class="hover:bg-[#f6f6f6] dark:hover:bg-dark cursor-pointer" @click="handleRead(index)">
            <el-descriptions-item class="px-15px" :class="{ 'opacity-30': item.isRead }">
                <template #avatar>
                    <el-avatar v-if="item.avatar" :src="item.avatar" />
                    <svg-icon v-else class="text-34px text-primary" :icon="item.icon" :local-icon="item.svgIcon" />
                </template>
                <template #header>
                    <n-ellipsis :line-clamp="1">
                        {{ item.title }}
                        <template #tooltip>
                            {{ item.title }}
                        </template>
                    </n-ellipsis>
                </template>
                <template v-if="item.tagTitle" #header-extra>
                    <el-tag v-bind="item.tagProps" size="small">{{ item.tagTitle }}</el-tag>
                </template>
                <template #description>
                    <el-ellipsis v-if="item.description" :line-clamp="2">
                        {{ item.description }}
                    </el-ellipsis>
                    <p>{{ item.date }}</p>
                </template>
            </el-descriptions-item>
        </el-descriptions>
    </el-scrollbar>
</template>
<script lang="ts" setup>
import { ElScrollbar, ElDescriptions, ElDescriptionsItem, ElAvatar, ElTag } from 'element-plus'

interface Props {
    list?: any[];
}
withDefaults(defineProps<Props>(), {
    list: () => []
});
interface Emits {
    (e: 'read', val: number): void;
}
const emit = defineEmits<Emits>();
function handleRead(index: number) {
    emit('read', index);
}
</script>