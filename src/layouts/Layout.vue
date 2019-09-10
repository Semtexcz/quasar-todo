<template lang="pug">
  q-layout(view='hHh lpR lFf')
    q-header(elevated='')
      q-toolbar
        q-toolbar-title.absolute-center Awesome Todo
    q-footer
      q-tabs
        q-route-tab(
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          :icon='nav.icon'
          :label='nav.label')
    q-drawer(
      v-model='leftDrawerOpen'
      :width="250"
      :breakpoint="767"
      bordered=''
      content-class='bg-primary')
      q-list(dark)
        q-item-label(header='') Navigation
        q-item.text-grey-4(
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

<style lang="stylus">
  @media screen and (min-width: 768px)
    .q-footer
      display none
  .q-drawer .q-router-link--exact-active
    color white !important
</style>
