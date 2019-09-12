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
</template>

<style lang="stylus">

</style>

<script>
import { mapGetters } from 'vuex'
import Task from 'src/components/Tasks/Task.vue'

export default {
  computed: {
    ...mapGetters('tasks', ['tasks'])
  },
  components: {
    Task
  }
}
</script>
