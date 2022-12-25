<template>
  <el-dropdown :options="options" @select="handleDropdown">
    <hover-container class="px-12px">
      <icon-custom-avatar class="text-32px" />
      <span class="pl-8px text-16px font-medium">username</span>
    </hover-container>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { HoverContainer } from '@/components'
import { ElMessageBox,ElDropdown } from 'element-plus'
import { useRouter } from 'vue-router';
import { iconifyRender } from '@/utils';
import type { Action } from 'element-plus'
type DropdownKey = 'user-center' | 'logout';
const router = useRouter();

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
    ElMessageBox.confirm('您确定要退出登录吗？', '提示', {
      // if you want to disable its autofocus
      // autofocus: false,
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      callback: (action: Action) => {
        console.log('清空登录状态');
      },
    })
  }
  if (key === 'user-center') {
    router.push('/dashboard/user');
  }
}
</script>
<style scoped>

</style>
