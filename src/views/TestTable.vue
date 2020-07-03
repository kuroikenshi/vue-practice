<template>
  <div>    
    <!-- 表格 -->
    <DemoVXETable v-if="true"></DemoVXETable>
  </div>
</template>

<script>
import DemoVXETable from '@/components/DemoVXETable.vue'

export default {
  name: 'TestTable',
  components: {
    DemoVXETable
  },
  methods: {}
}
</script>

<style>
  
</style>
