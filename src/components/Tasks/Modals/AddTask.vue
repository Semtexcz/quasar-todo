<template lang="pug">
  q-card
    q-card-section.row
      .text-h6 Add task
      q-space
      q-btn(
        v-close-popup
        flat=''
        round=''
        dense
        icon='close')
    q-form(
      @submit.prevent="submitForm"
      )
      q-card-section
        .row.q-mb-sm
          q-input.col(
            autofocus=''
            outlined=''
            v-model='taskToSubmit.name'
            label='Task name'
            :rules="[val => !!val || 'Field is required']"
            ref="name")
            template(v-slot:append='')
              q-icon.cursor-pointer(
                v-if="taskToSubmit.name"
                name='close'
                @click="taskToSubmit.name = ''")
        .row.q-mb-sm
          q-input(
            label='Due date'
            outlined=''
            v-model='taskToSubmit.dueDate')
            template(v-slot:append="")
              q-icon.cursor-pointer(
                v-if="taskToSubmit.dueDate"
                name='close'
                @click="clearDueDate")
              q-icon.cursor-pointer(name='event')
                q-popup-proxy(
                  ref='qDateProxy'
                  transition-show='scale'
                  transition-hide='scale')
                  q-date(
                    v-model='taskToSubmit.dueDate'
                    @input='() => $refs.qDateProxy.hide()')
        .row.q-mb-sm(
          v-if="taskToSubmit.dueDate"
          )
          q-input.col(
            label='Due time'
            outlined
            v-model='taskToSubmit.dueTime'
            )
            template(v-slot:append="")
              q-icon.cursor-pointer(
                v-if="taskToSubmit.dueTime"
                name='close'
                @click="taskToSubmit.dueTime = ''")
              q-icon.cursor-pointer(name='access_time')
                q-popup-proxy(
                  transition-show='scale'
                  transition-hide='scale')
                  q-time(
                    :format24h="true"
                    v-model='taskToSubmit.dueTime')

      q-card-actions(align='right')
        q-btn(
          label='Save'
          color='primary'
          type="submit"
          )
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddTask',
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
      this.$refs.name.validate()
      if (!this.$refs.name.hasError) {
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
  }
}
</script>

<style scoped>

</style>
