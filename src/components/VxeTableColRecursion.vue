<template>  
  <vxe-table-column :field="data.name" :title="data.name">
    <VxeTableColRecursion v-for="(child, index) in data.children" :key="index" :data="child"></VxeTableColRecursion>
  </vxe-table-column>
</template>

<script>
export default {
  name: 'VxeTableColRecursion',
  props: ['data']
}
</script>

<style>
</style>
