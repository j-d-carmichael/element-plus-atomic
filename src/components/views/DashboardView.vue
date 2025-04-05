<template>

  <div class="is-flex">
    <div>Start coding here...</div>
    <div>
      <el-button type="primary" @click="generalStore.counterInc()">{{ generalStore.data.counter }}</el-button>
    </div>
  </div>

  <div class="is-flex is-flex-direction-column">
    <p>Here is an icon from fontawesome... there is not enough choice in element plus to get a full POC up and running quickly.</p>
    <p>Imported by default the <a target="_blank" href="https://fontawesome.com/icons/circle?f=classic&s=solid">fa classic solid</a>.</p>
    <p>
      Spinner:
      <font-awesome-icon icon="spinner" spin/>
    </p>
    <p>
      Circle:
      <font-awesome-icon icon="circle" spin/>
    </p>

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
