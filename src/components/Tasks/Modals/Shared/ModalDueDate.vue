<template lang="pug">
  .row.q-mb-sm
    q-input(
      label='Due date'
      outlined=''
      :value='dueDate'
      @input="$emit('update:dueDate', $event)"
      )
      template(v-slot:append="")
        q-icon.cursor-pointer(
          v-if="dueDate"
          name='close'
          @click="$emit('clear')")
        q-icon.cursor-pointer(name='event')
          q-popup-proxy
            q-date(
              :value='dueDate'
              @input="$emit('update:dueDate', $event)"
              )
</template>

<script>
export default {
  props: ['dueDate']
}
</script>

<style scoped>

</style>
