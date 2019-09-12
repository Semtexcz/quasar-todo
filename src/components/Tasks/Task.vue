<template lang="pug">
  q-item(
    @click = "updateTask({id: id, updates: {completed: !task.completed}})"
    :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
    clickable
    v-ripple='')
    q-item-section(side='' top='')
      q-checkbox.no-pointer-events(
        :value='task.completed')
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
    q-item-section(side='')
      q-btn(
        @click.stop="promptToDelete(id)"
        dense
        flat=''
        round=''
        color='red'
        icon='delete')
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Task',
  props: ['task', 'id'],
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
    promptToDelete (id) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Really delete?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.deleteTask(id)
      })
    }
  }
}
</script>

<style scoped>

</style>
