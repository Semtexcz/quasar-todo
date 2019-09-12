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
      | Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
    q-card-actions(align='right')
      q-btn(
        flat=''
        label='Save'
        color='primary'
        v-close-popup='')
</template>

<script>
export default {
  name: 'AddTask'
}
</script>

<style scoped>

</style>
