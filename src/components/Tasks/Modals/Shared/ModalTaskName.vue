<template lang="pug">
  .row.q-mb-sm
    q-input.col(
      autofocus=''
      outlined=''
      :value="name"
      @input="$emit('update:name', $event)"
      label='Task name'
      :rules="[val => !!val || 'Field is required']"
      ref="name")
      template(v-slot:append='')
        q-icon.cursor-pointer(
          v-if="name"
          name='close'
          @click="$emit('update:name', '')")
</template>

<script>
export default {
  props: ['name'],
  name: 'ModalTaskName'
}
</script>

<style scoped>

</style>
