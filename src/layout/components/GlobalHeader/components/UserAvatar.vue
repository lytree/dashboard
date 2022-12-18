<template>
  <n-dropdown :options="options" @select="handleDropdown">
    <hover-container class="px-12px" :inverted="theme.header.inverted">
      <icon-custom-avatar class="text-32px" />
      <span class="pl-8px text-16px font-medium">{{ auth.userInfo.username }}</span>
    </hover-container>
  </n-dropdown>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useAuthStore, useThemeStore } from '@/store';
import { iconifyRender } from '@/utils';

type DropdownKey = 'user-center' | 'logout';
const router = useRouter();
const auth = useAuthStore();
const theme = useThemeStore();

const options = [
  {
    label: '用户中心',
    key: 'user-center',
    icon: iconifyRender('carbon:user-avatar')
  },
  {
    type: 'divider',
    key: 'divider'
  },
  {
    label: '退出登录',
    key: 'logout',
    icon: iconifyRender('carbon:logout')
  }
];

function handleDropdown(optionKey: string) {
  const key = optionKey as DropdownKey;
  if (key === 'logout') {
    window.$dialog?.info({
      title: '提示',
      content: '您确定要退出登录吗？',
      positiveText: '确定',
      negativeText: '取消',
      onPositiveClick: () => {
        auth.resetAuthStore();
      }
    });
  }
  if (key === 'user-center') {
    router.push('/dashboard/user');
  }
}
</script>
<style scoped></style>
