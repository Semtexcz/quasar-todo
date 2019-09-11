<template lang="pug">
  q-page.q-pa-md
    q-list(bordered='')
        q-item(
          v-for="task in tasks"
          :key="task.id"
          @click = "task.ccompleted = !task.ccompleted"
          clickable
          v-ripple='')
          q-item-section(side='' top='')
            q-checkbox(v-model='task.completed')
          q-item-section
            q-item-label {{ task.name }}
</template>

<style lang="stylus">

</style>

<script>
export default {
  data () {
    return {
      tasks: [
        {
          id: 1,
          name: 'Go to shop',
          completed: false
        },
        {
          id: 2,
          name: 'Get bananas',
          completed: false
        },
        {
          id: 3,
          name: 'Get apples',
          completed: false
        }
      ]
    }
  }
}
</script>
