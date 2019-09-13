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
    q-card-section
      .row.q-mb-sm
        q-input.col(
          outlined=''
          v-model='taskToSubmit.name'
          label='Task name')
      .row.q-mb-sm
        q-input(
          label='Due date'
          outlined=''
          v-model='taskToSubmit.dueDate')
          template(v-slot:append="")
            q-icon.cursor-pointer(name='event')
              q-popup-proxy(ref='qDateProxy' transition-show='scale' transition-hide='scale')
                q-date(v-model='taskToSubmit.dueDate' @input='() => $refs.qDateProxy.hide()')
      .row.q-mb-sm
        q-input(
          label='Due time'
          outlined
          v-model='taskToSubmit.dueTime'
          )
          template(v-slot:append="")
            q-icon.cursor-pointer(name='access_time')
              q-popup-proxy(
                transition-show='scale'
                transition-hide='scale')
                q-time(
                  :format24h="true"
                  v-model='taskToSubmit.dueTime')

    q-card-actions(align='right')
      q-btn(
        flat=''
        label='Save'
        color='primary'
        v-close-popup='')
</template>

<script>
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
  }
}
</script>

<style scoped>

</style>
