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
    q-item-section(
      side=''
      v-if="task.dueDate")
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
      .row
        q-btn(
          @click.stop="showEditTask=true"
          dense
          flat=''
          round=''
          color='primary'
          icon='edit')
        q-btn(
          @click.stop="promptToDelete(id)"
          dense
          flat=''
          round=''
          color='red'
          icon='delete')
    q-dialog(v-model='showEditTask')
      edit-task(
        @close="showEditTask = false"
        :task="task"
        :id="id"
      )
      pre {{ task }}
      pre {{ id }}
</template>

<script>
import { mapActions } from 'vuex'
import EditTask from 'src/components/Tasks/Modals/EditTask.vue'
export default {
  name: 'Task',
  props: ['task', 'id'],
  data () {
    return {
      'showEditTask': false
    }
  },
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
  },
  components: {
    EditTask
  }
}
</script>

<style scoped>

</style>
