<template>
  <div style="border-left: solid 1px #2C3E50; margin-left: 3em;">
    <span>—— {{ data.name }}</span>
    <RecursionData v-for="(child, index) in data.children" :key="index" :data="child"></RecursionData>
  </div>
</template>

<script>
export default {
  name: 'RecursionData',
  props: ['data']
}
</script>

<style>
</style>
