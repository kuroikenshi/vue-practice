<template>
  <div>
    
    <div style="margin-bottom: 20px; margin-top: 20px; background: #eee;">
      <label style="display: block;">ORIGIN_DATA: </label>
      {{ rowDataOrigin }}
      <label style="display: block;">ORIGIN_TABEL_DATA: </label>
      {{ tableData }}
    </div>
    
    <el-button type="primary" @click="processTreeData">处理</el-button>
    
    <div style="margin-bottom: 20px; margin-top: 20px; background: #eee;">
      <label style="display: block;">DATA: </label>{{ treeData }}
    </div>
    
    <div style="margin-bottom: 20px; margin-top: 20px; background: #eee;">
      <label>Structure: </label>
      <RecursionData v-for="(itemData, index) in treeData" :key="index" :data="itemData"></RecursionData>
    </div>
    
    <vxe-table
        border
        highlight-hover-column
        highlight-hover-row
        :data="tableData">
      
      <VxeTableColRecursion v-for="(itemData, index) in treeData" :key="index" :data="itemData"></VxeTableColRecursion>
    </vxe-table>
    
    
    
  </div>
</template>

<script>
function transRowData(rowOriginData) {
  let baseNode = {
    name: 'base',
    children: []
  }
  
  function buildTreeData(parentNode, currentData) {
    let layerName = currentData.split('|')[0]
    let nextLayerData = currentData.split('|').splice(1).join('|')
    
    let foundIndex = -1;
    if (Array.isArray(parentNode['children'])) {
      foundIndex = findIndex(layerName, 'name', parentNode['children'])
    }
    
    let currentNode = undefined
    
    if (foundIndex == -1) {
      currentNode = {
        name: layerName
      }
      if (parentNode['children'] == undefined) {
        parentNode['children'] = []
      }
      parentNode['children'].push(currentNode)
    } else {
      currentNode = parentNode['children'][foundIndex]
    }
    
    if (nextLayerData) {
      buildTreeData(currentNode, nextLayerData)
    }
  }
  
  rowOriginData.map(dataItem => {
    buildTreeData(baseNode, dataItem)
  })
  
  return baseNode.children
}

function findIndex(value, key, groupData) {
  let idx = -1
  groupData.map((o, i) => {
    if (value == o[key]) {
      idx = i
    }
  })
  return idx
}

import VxeTableColRecursion from '@/components/VxeTableColRecursion.vue'
import RecursionData from '@/components/RecursionData.vue'

export default {
  name: 'DemoVXETable',
  components: {
    VxeTableColRecursion,
    RecursionData
  },
  mounted () {
  },
  data () {
    return {
      tableData: [
        { id: 10001, Name: 'Test1', Age: 20, Role: 'Develop', Gender: 'Man', ClassCode: 'BJ001', StudentCode: 'BJ123000001' },
        { id: 10002, Name: 'Test2', Age: 22, Role: 'Test', Gender: 'Man', ClassCode: 'BJ002', StudentCode: 'BJ123000002' },
        { id: 10003, Name: 'Test3', Age: 40, Role: 'PM', Gender: 'Man', ClassCode: 'BJ001', StudentCode: 'BJ123000003' }
      ],
      rowDataOrigin: [
        '基本信息|Name',
        '分类信息|Age',
        '更多信息|Role',
        '更多信息|Gender',
        '更多信息|详细信息|ClassCode',
        '更多信息|详细信息|StudentCode'
      ],
      treeData: undefined
    }
  },
  methods: {
    processTreeData: function() {
      this.treeData = transRowData(this.rowDataOrigin)
    }
  }
}
</script>

<style>
</style>
