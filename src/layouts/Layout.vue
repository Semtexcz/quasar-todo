<template lang="pug">
  q-layout(view='lHh Lpr lFf')
    q-header(elevated='')
      q-toolbar
        q-btn(flat='' dense='' round='' @click='leftDrawerOpen = !leftDrawerOpen' aria-label='Menu')
          q-icon(name='menu')
        q-toolbar-title
          | Quasar App
        div Quasar v{{ $q.version }}
    q-footer
      q-tabs
        q-route-tab(
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          :icon='nav.icon'
          :label='nav.label')
    q-drawer(v-model='leftDrawerOpen' bordered='' content-class='bg-grey-2')
      q-list
        q-item-label(header='') Navigation
        q-item(
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          exact
          clickable='')
          q-item-section(avatar='')
            q-icon(:name='nav.icon')
          q-item-section
            q-item-label {{ nav.label }}
    q-page-container
      router-view
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      navs: [
        {
          label: 'Todo',
          icon: 'list',
          to: '/'
        },
        {
          label: 'Settings',
          icon: 'settings',
          to: '/settings'
        }
      ]
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
