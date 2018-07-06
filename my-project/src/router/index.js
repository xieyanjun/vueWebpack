import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TodoList from '@/components/Todo/TodoList'
import Table from '@/components/TableList/Table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/todo_list',
      name: 'todoList',
      component: TodoList
    },
    {
      path: '/table',
      name: 'table',
      component: Table
    }
  ]
})
