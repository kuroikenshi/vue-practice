<template>
  <div>
    <el-form :model="form">
      <el-row :gutter="40">
        <!-- 数据源 -->
        <el-col :span="24">
          <el-form-item label="数据源">
            <el-select v-model="form.ds" placeholder="请选择数据源">
              <el-option v-for="(dataSrc, index) in dataSrcList" :key="index" :label="dataSrc.label" :value="dataSrc.value"></el-option>
            </el-select> 
          </el-form-item>
          
        </el-col>
      </el-row>
      <br>
      
      <el-row :gutter="40">
        <!-- SQL模板 -->
        <el-col :span="12" show="form.ds">
          <el-form-item label="SQL模板">
            <el-input type="textarea" :rows="5" v-model="form.sql"></el-input>
          </el-form-item>
          
        </el-col>
        
        <!-- 模板中的值 -->
        <el-col :span="12" show="keys.length">          
        
          <el-form-item v-for="(key, index) in keys" :key="index" :label="key">
            <el-input class="el-short-input" v-model="form.values[key]"></el-input>
          </el-form-item>
          
        </el-col>
      </el-row>
      <el-row :gutter="40">
        <el-col :span="12">
          <el-button type="primary" plain @click="ScanSQL" :disabled="!form.sql">扫描sql&gt;&gt;&gt;</el-button>
        </el-col>
        <el-col :span="12">
          <el-button type="warning" plain @click="RenderSQL" :disabled="!form.sql">渲染SQLsql&gt;&gt;&gt;</el-button>
        </el-col>
      </el-row>
      <br>
      
      <el-row :gutter="40">
        <!-- 生成的SQL -->
        <el-col :span="24"  show="outputSql" :innerHTML="outputSql">
          <el-form-item label="生成的SQL">
            <el-input type="textarea" :rows="5" v-model="outputSql" readonly></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'TestPage',
  data () {
    return {
      form: {
        ds: '',
        sql: 'SELECT col1, col2, col3 AS 列三 \nFROM table1 \nWHERE col1 <> ${col1} AND col2 > ${col2} AND col3 == ${col1} + ${col2}',
        values: {}
      },
      keys: [],
      dataSrcList: [
        {label: '数据源1', value: 'ds1'},
        {label: '数据源2', value: 'ds2'},
        {label: '数据源3', value: 'ds3'},
        {label: '数据源4', value: 'ds4'}
      ],
      outputSql: ''
    }
  },
  methods: {
    ScanSQL: function() {
      this.keys = Array.from(new Set(Array.from(this.form.sql.matchAll(/\${(.*?)}/g), item => item[1])))
    },
    
    RenderSQL: function() {
      this.outputSql = this.form.sql
      console.log(this.keys.map)
      this.keys.map(key => {
        let pattern = new RegExp('\\${' + key + '}', 'g')
        console.log(key, this.form.values[key])
        this.outputSql = this.outputSql.replace(pattern, this.form.values[key])
      })
      
      this.outputSql.replace(/\\n/g, '111')
    }
  }
}
</script>

<style scoped>
/* .el-short-input {
  width: 200px;
} */
</style>
