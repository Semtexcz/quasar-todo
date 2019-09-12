<template lang="pug">
  q-page.q-pa-md
    q-list(
      bordered=''
      separator='')
        task(
          v-for="(task, key) in tasks"
          :key="key"
          :task="task"
          :id="key")
    .absolute-bottom.text-center.q-mb-lg
      q-btn(
        @click="showAddTask = true"
        round=''
        color="primary"
        size="24px"
        icon="add")
    q-dialog(v-model='showAddTask')
      add-task
</template>

<style lang="stylus">

</style>

<script>
import { mapGetters } from 'vuex'
import Task from 'src/components/Tasks/Task.vue'
import AddTask from 'src/components/Tasks/Modals/AddTask.vue'

export default {
  data () {
    return {
      showAddTask: true
    }
  },
  computed: {
    ...mapGetters('tasks', ['tasks'])
  },
  components: {
    Task,
    AddTask
  }
}
</script>
