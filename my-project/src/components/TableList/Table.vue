<template>
    <TableList :table='tableData' />
  </template>
<script>
import TableList from './TableList'
export default {
  name: 'table',
  components: {
    TableList
  },
  data: function () {
    return {
      width: '180',
      tableData: {
        tr: [
          {
            id: '1',
            label: '用户名',
            prop: 'username',
            show: 'template',
            className: 'username'
          },
          {
            id: '2',
            label: '真实姓名',
            prop: 'real_name'
          },
          {
            id: '3',
            label: '性别',
            prop: 'sex_value'
          },
          {
            id: '11',
            label: '客服',
            prop: 'agent_name'
          },
          {
            id: '7',
            label: '渠道',
            prop: 'channel_id'
          },
          {
            id: '8',
            label: '注册时间',
            prop: 'regist_time',
            minWidth: '150'
          },
          {
            id: '9',
            label: '上次登录时间',
            prop: 'login_time',
            minWidth: '150'
          },
          {
            id: '10',
            label: '用户状态',
            prop: 'status_value'
          }
        ],
        data: [
          {
            prop: '小明'
          }
        ]
      }
    }
  }
}
</script>
