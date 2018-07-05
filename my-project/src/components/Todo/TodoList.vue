<template>
    <div>
        <BaseInputText v-model="value"  @keydown.enter="addToDo"  />
        <ul class="list">
            <TodoListItem v-for="todo in todoLists" :key="todo.id" :todo="todo" @remove="removeTodo" />
        </ul>
    </div>
</template>
<script>
import BaseInputText from './BaseInputText.vue'
import TodoListItem from './TodoListItem.vue'
let nextTodoId = 1
export default {
  name: 'todoList',
  components: {
    BaseInputText,
    TodoListItem
  },
  data: function () {
    return {
      value: '',
      todoLists: [{
        id: nextTodoId++,
        text: 'Learn Vue'
      },
      {
        id: nextTodoId++,
        text: 'Learn about single-file components'
      } ]
    }
  },
  methods: {
    addToDo: function () {
      let valuetrim = this.value.trim()
      if (valuetrim) {
        this.todoLists.push({
          id: nextTodoId++,
          text: this.value})
      }
      this.value = ''
    },
    removeTodo: function (Idtoremove) {
      this.todoLists = this.todoLists.filter(todo => {
        return todo.id !== Idtoremove
      })
    }
  }
}
</script>
<style>
    .list{
        margin:15px auto;
        width: 300px;
        text-align: left;
        padding-left: 74px;
    }
    .list li{
        line-height: 30px;
    }
</style>
