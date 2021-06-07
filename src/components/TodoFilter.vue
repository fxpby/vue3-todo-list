<template>
  <div class="filters">
    <!-- :class="{ active: filter.active }" -->
    <span
      class="filter"
      :class="{ active: selected === filter.value }"
      v-for="(filter, index) in filters"
      :key="filter.value"
      @click="changeFilterHandler(filter.value, index)"
    >
      {{ filter.label }}
    </span>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    selected: {
      type: String,
      default: "all",
    },
  },
  setup(props, context) {
    const filters = ref([
      {
        label: "全部",
        value: "all",
        active: true,
      },
      {
        label: "已完成",
        value: "done",
        active: false,
      },
      {
        label: "未完成",
        value: "todo",
        active: false,
      },
    ]);

    const changeFilterHandler = (filter, index) => {
      // filters.value.forEach((ele) => {
      //   ele.active = false;
      // });
      // filters.value[index].active = true;

      context.emit("changeFilterHandler", filter);
    };
    return {
      filters,
      changeFilterHandler,
    };
  },
};
</script>

<style lang="less" scoped>
.filters {
  margin: 8px 0;

  .filter {
    margin-right: 12px;
    cursor: pointer;
  }
  .active {
    color: green;
  }
}
</style>
