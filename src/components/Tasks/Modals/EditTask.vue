<template lang="pug">
  q-card
    modal-header Add Task
    q-form(
      @submit.prevent="submitForm"
      )
      q-card-section
        modal-task-name(
          :name.sync="taskToSubmit.name"
          ref="modalTaskName"
        )
        modal-due-date(
          :dueDate.sync="taskToSubmit.dueDate"
          @clear="clearDueDate"
        )
        modal-due-time(
          v-if="taskToSubmit.dueDate"
          :dueTime.sync="taskToSubmit.dueTime"
        )

      q-card-actions(align='right')
        modal-buttons
</template>

<script>
import { mapActions } from 'vuex'
import ModalHeader from 'src/components/Tasks/Modals/Shared/ModalHeader.vue'
import ModalTaskName from 'src/components/Tasks/Modals/Shared/ModalTaskName.vue'
import ModalDueDate from 'src/components/Tasks/Modals/Shared/ModalDueDate.vue'
import ModalDueTime from 'src/components/Tasks/Modals/Shared/ModalDueTime.vue'
import ModalButtons from 'src/components/Tasks/Modals/Shared/ModalButtons.vue'

export default {
  name: 'EditTask',
  data () {
    return {
      taskToSubmit: {
        name: '',
        dueDate: '',
        dueTime: '',
        completed: false
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['addTask']),
    submitForm () {
      this.$refs.modalTaskName.$refs.name.validate()
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask()
      }
    },
    submitTask () {
      this.addTask(this.taskToSubmit)
      this.$emit('close')
    },
    clearDueDate () {
      this.taskToSubmit.dueDate = ''
      this.taskToSubmit.dueTime = ''
    }
  },
  components: {
    ModalHeader,
    ModalTaskName,
    ModalDueDate,
    ModalDueTime,
    ModalButtons
  }
}
</script>

<style scoped>

</style>
