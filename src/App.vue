<template>
  <div id="app">
    <v-app>
      <Navbar />
      <v-content>
        <nav class="gNav">
          <v-layout justify-space-around>
            <router-link
              to="/"
              exact>Top</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/skills">Skills</router-link>
            <router-link to="/works">Works</router-link>
            <router-link to="/apps">Apps</router-link>
          </v-layout>
        </nav>
        <v-container>
          <transition
            name="view"
            appear><router-view />
          </transition>
        </v-container>
      </v-content>
      <Footer />
    </v-app>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar: Navbar,
    Footer: Footer
  }
}
</script>

<style>
.gNav {
  display: flex;
  align-items: center;
  background: #212121;
}
.gNav a {
  display: block;
  width: 20%;
  text-align: center;
  padding: .8rem 0;
  color: #eee;
  line-height: 1em;
  text-decoration: none;
  transition: .7s;
}
.gNav a:hover {
  opacity: .7;
  background: rgba(219, 112, 147, .7);
}
.router-link-active {
  background: palevioletred;
}
.view-enter-active, .view-leave-active {
  transition: opacity 0.5s;
}
.view-leave-active {
  position: absolute;
}
.view-enter, .view-leave-to {
  opacity: 0;
}
@keyframes text-in {
  0% {
    transform: translate(-15px, -15px);
    opacity: 0;
  }
}
/* ページタイトルアニメーション */
.pageTitle {
  display: inline-block;
  min-width: 0.3em;
  font-size: 2rem;
  animation: text-in .3s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards;
}
</style>
