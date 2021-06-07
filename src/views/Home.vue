<template>
  <div class="wrapper">
    <div class="container">
      <h1>如此简陋的todolist, 你忍心看嘛</h1>
      <todo-add @add-todo-handler="addTodoHandler" />
      <todo-filter
        :selected="filter"
        @changeFilterHandler="changeFilterHandler($event)"
      />
      <todo-list :todosArr="filteredTodos" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { computed, ref } from "vue";
import TodoAdd from "../components/TodoAdd.vue";
import TodoFilter from "../components/TodoFilter.vue";
import TodoList from "../components/TodoList.vue";
export default {
  name: "Home",
  components: {
    TodoAdd,
    TodoFilter,
    TodoList,
  },
  setup() {
    // ref 适合包装基本类型数据 or 简单数据
    // reactive 适合包装复杂的对象数据
    const todosArr = ref([]);
    const filter = ref("all");
    const filteredTodos = computed(() => {
      switch (filter.value) {
        case "done":
          return todosArr.value.filter((todo) => todo.completed);
        case "todo":
          return todosArr.value.filter((todo) => !todo.completed);
        default:
          return todosArr.value;
      }
    });

    const addTodoHandler = (todoItem) => {
      console.log(todoItem);
      todosArr.value.push(todoItem);
    };

    const changeFilterHandler = (e) => {
      filter.value = e;
    };
    return {
      todosArr,
      addTodoHandler,
      filter,
      filteredTodos,
      changeFilterHandler,
    };
  },
};
</script>
<style lang="less" scoped>
.wrapper {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 60%;
    padding: 48px 24px;
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.2);
    border-radius: 24px;
  }
}
</style>
