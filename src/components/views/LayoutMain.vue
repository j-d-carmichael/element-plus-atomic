<script setup lang="ts"></script>

<template>
  <el-container class="app-container">
    <el-header height="60px">
      <o-header/>
    </el-header>
    <el-container class="main-container">
      <router-view />
    </el-container>
  </el-container>
</template>

<style lang="scss">
.app-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-container {
  flex: 1;
  width: 100%;
}
</style>
