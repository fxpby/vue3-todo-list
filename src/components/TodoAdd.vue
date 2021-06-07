<template>
  <div class="input-add">
    <input
      type="text"
      name="todo"
      v-model="todoContent"
      @keyup.enter="emitAddTodoHandler"
    />
    <button @click="emitAddTodoHandler">
      <i>+++</i>
    </button>
  </div>
</template>

<script>
import { v4 as uuidV4 } from "uuid";
import { ref } from "vue";
export default {
  setup(props, context) {
    const todoContent = ref("");
    const emitAddTodoHandler = () => {
      const todoItem = {
        id: uuidV4(),
        content: todoContent.value,
        completed: false,
      };

      context.emit("addTodoHandler", todoItem);
      todoContent.value = "";
    };
    return {
      todoContent,
      emitAddTodoHandler,
    };
  },
};
</script>

<style lang="less" scoped>
button {
  margin-left: 12px;
  cursor: pointer;
}
</style>
