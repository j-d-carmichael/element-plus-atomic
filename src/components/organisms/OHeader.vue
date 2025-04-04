<script setup lang="ts">
import router from '~/router';
import { RouteNamesEnum } from '~/router/RouteNamesEnum';
</script>

<template>
  <div class="app-header">
    <div class="header-left" @click="router.push({ name: RouteNamesEnum.dash })">
      DEMO
    </div>
    <div class="header-right">

    </div>
  </div>
</template>

<style scoped>
.app-header {
  height: 100%;
  border-bottom: 1px solid var(--el-border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-left {
  display: flex;
  align-items: center;
  gap: .5rem;
}
</style>
