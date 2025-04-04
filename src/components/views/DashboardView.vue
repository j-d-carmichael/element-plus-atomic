<template>

  <div>Start coding here...</div>
  <div>
    <el-button type="primary" @click="generalStore.counterInc()">{{ generalStore.data.counter }}</el-button>
  </div>

</template>

<style lang="scss" scoped>
div {
  width: 400px;
  margin: auto;
}
</style>

<script setup lang="ts">
import { useGeneralStore } from '~/store/generalStore';

const generalStore = useGeneralStore();
</script>
