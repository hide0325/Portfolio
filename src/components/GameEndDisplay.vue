<template>
  <v-layout justify-center>
    <v-flex
      xs10
      md8
      class="gameDisplay">
      <v-layout
        column
        justify-center
        align-center
        class="gameDisplay_inner">
        <transition>
          <p
            v-if="perfectMsg"
            :key="perfectMsg"
            class="display-2 indigo--text text--lighten-2">PERFECT!!</p>
        </transition>
        <p
          v-if="missCountMsg"
          class="grey--text text--darken-2">TYPING MISS: {{ missTypeCount }}</p>
        <v-btn
          outline
          color="indigo"
          @click="gameStart">Retry</v-btn>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'GameEndDisplay',
  data() {
    return {
      perfectMsg: false,
      missCountMsg: true
    }
  },
  methods: {
    gameStart() {
      this.$emit('game-start')
      this.$store.dispatch('resetHealthA')
      this.$store.dispatch('resetMissCountA')
      this.solvedWords = []
    }
  },
  computed: {
    missTypeCount() {
      if(this.$store.getters.missCountG === 0) {
        this.perfectMsg = true
        this.missCountMsg = false
      }
      return this.$store.getters.missCountG
    }
  }
}
</script>

<style scoped>
.gameDisplay {
  height: 400px;
  box-shadow: 1px 1px 3px #8a96dc, -1px -1px 3px #8a96dc;
}
.gameDisplay_inner {
  height: 100%;
}
@keyframes bounce {
  from, 20%, 53%, 80%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transform: translate3d(0,0,0);
  }
  40%, 43% {
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -30px, 0);
  }
  70% {
    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0,-4px,0);
  }
}
.v-enter-active {
  animation: bounce 1s;
  transform-origin: center bottom;
}
</style>
