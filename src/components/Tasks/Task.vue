<template lang="pug">
  q-item(
    @click = "task.ccompleted = !task.ccompleted"
    :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
    clickable
    v-ripple='')
    q-item-section(side='' top='')
      q-checkbox(v-model='task.completed')
    q-item-section
      q-item-label(
        :class="{'text-strikethrough': task.completed}") {{ task.name }}
    q-item-section(side='')
      .row
        .column.justify-center
          q-icon.q-mr-xs(
            name="event"
            size="18px")
        .column
          q-item-label.row.justify-end(caption='') {{ task.dueDate }}
          q-item-label.row.justify-end(caption='')
            small {{ task.dueTime }}
</template>

<script>
export default {
  name: 'Task',
  props: ['task', 'id']
}
</script>

<style scoped>

</style>
