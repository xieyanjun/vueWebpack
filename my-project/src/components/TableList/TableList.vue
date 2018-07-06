<template :table="table" >
     <el-table
      :data="table.data"
      style="width: 100%">
      <template v-for="item in table.tr">
        <el-table-column
            :key="item.id"
            :prop="item.prop"
            :label="item.label"
            :minWidth="item.minWidth"
            >
            <template slot-scope="scope">
              <slot :name="item.prop" :obj="scope"></slot>
            </template>
        </el-table-column>
      </template>
    </el-table>
</template>
<script>
export default {
  name: 'tableItem',
  props: {
    table: {
      type: Object,
      default () {
        return {
          tr: [ // 表头数据 —— className:列的class名
            {
              id: '1',
              label: 'label',
              prop: 'prop',
              className: 'classname',
              minWidth: '80',
              show: true // show有三种值：false隐藏当前列，true常规表格列，template自定义表格列
            }
          ],
          data: []
        }
      }
    }
  }
}
</script>
