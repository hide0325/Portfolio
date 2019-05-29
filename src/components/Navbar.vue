<template>
  <nav>
    <v-toolbar
      flat
      app>
      <v-toolbar-side-icon @click="drawer=!drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <span class="font-weight-bold">HK's</span>
        <span>Portfolio</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer
     app
     class="indigo"
     v-model="drawer">
      <v-layout
        column
        align-center>
        <v-flex class="mt-5">
          <v-avatar size="90">
            <img src="@/assets/profile/face.png">
          </v-avatar>
          <p
            class="white--text
            subheading
            mt-1
            text-xs-center">Hide.K</p>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route">
          <v-list-tile-action>
            <v-icon
              class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data: function() {
    return {
      drawer: false,
      links: [
        { icon: 'home', text: 'Top', route: '/' },
        { icon: 'info', text: 'About', route: '/about' },
        { icon: 'code', text: 'Skills', route: '/skills' },
        { icon: 'web', text: 'Works', route: '/works' },
        { icon: 'apps', text: 'Apps', route: '/apps' }
      ]
    }
  }
}
</script>

<style scoped>
</style>
