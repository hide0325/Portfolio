<template>
  <v-layout
    justify-center
    class="mb-3">
    <v-flex
      class="gameDisplay
      xs10
      md8
      text-xs-center">
      <v-layout
        class="gameDisplay_inner"
        column
        justify-center
        align-center>
        <p class="display-1 indigo--text text--lighten-1">{{ title }}</p>
        <v-btn
          outline
          color="indigo"
          @click="gameStart">Start Game</v-btn>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  name: 'GameStartDisplay',
  data() {
    return {
      title: 'Charactor-Typing'
    }
  },
  methods: {
    gameStart() {
      this.$emit('game-start')
      this.$store.dispatch('resetHealthA')
      this.$store.dispatch('resetMissCountA')
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
</style>
