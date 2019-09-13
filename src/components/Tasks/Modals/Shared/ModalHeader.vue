<template lang="pug">
  q-card-section.row
    .text-h6
      slot
    q-space
    q-btn(
      v-close-popup
      flat=''
      round=''
      dense
      icon='close')
</template>

<script>
export default {
  name: 'ModalHeader'
}
</script>

<style scoped>

</style>
