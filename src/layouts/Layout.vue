<template lang="pug">
  q-layout(view='lHh Lpr lFf')
    q-header(elevated='')
      q-toolbar
        q-btn(flat='' dense='' round='' @click='leftDrawerOpen = !leftDrawerOpen' aria-label='Menu')
          q-icon(name='menu')
        q-toolbar-title
          | Quasar App
        div Quasar v{{ $q.version }}
    q-drawer(v-model='leftDrawerOpen' bordered='' content-class='bg-grey-2')
      q-list
        q-item-label(header='') Navigation
        q-item(
          to="/"
          exact
          clickable='')
          q-item-section(avatar='')
            q-icon(name='list')
          q-item-section
            q-item-label Todo
        q-item(
          to="/settings"
          exact
          clickable='')
          q-item-section(avatar='')
            q-icon(name='settings')
          q-item-section
            q-item-label Settings
    q-page-container
      router-view
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
