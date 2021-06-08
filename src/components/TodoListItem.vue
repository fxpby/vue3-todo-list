<template>
  <div class="todo-item" :class="{ done: todoItem.completed }">
    <label>
      <input type="checkbox" :checked="todoItem.completed" @click="changeStateHandler($event)" />
      {{ todoItem.content }}
      <span class="check-button"></span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    todoItem: {
      type: () => ({}),
      default: {},
    },
  },
  setup(props, context) {
    const changeStateHandler = e => {
      context.emit('changeState', e)
    }
    return {
      changeStateHandler,
    }
  },
}
</script>

<style lang="less" scoped>
.done label {
  text-decoration: line-through;
  font-style: italic;
}
</style>
