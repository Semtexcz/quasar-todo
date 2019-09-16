<template lang="pug">
  .row.q-mb-sm
    q-input.col(
      label='Due time'
      outlined
      :value='dueTime'
      @input="$emit('update:dueTime', $event)"
    )
      template(v-slot:append="")
        q-icon.cursor-pointer(
          v-if="dueTime"
          name='close'
          @click="$emit('update:dueTime', '')")
        q-icon.cursor-pointer(name='access_time')
          q-popup-proxy
            q-time(
              :format24h="true"
              :value='dueTime'
              @input="$emit('update:dueTime', $event)"
            )
</template>

<script>
export default {
  name: 'ModalDueTime',
  props: ['dueTime']
}
</script>

<style scoped>

</style>
