<template>
  <v-layout justify-center>
    <v-flex
      xs10
      md8>
      <transition @before-enter="missEffectEnd">
        <div
          class="gameDisplay text-xs-center"
          v-model="isCorrect"
          :key="currentHealth"
          ref="gameDisplay">
          <v-container>
            <v-flex xs2>
              <v-card class="py-2 mb-3">
                <div class="grey--text text--darken-2">No. {{ currentWordNumber }}</div>
              </v-card>
            </v-flex>
            <div class="text-xs-right grey--text text--darken-2">LIFE</div>
            <v-card flat>
              <div
                :style="{width: currentHealth + '%', background: gauge}"
                class="gauge text-xs-right"></div>
            </v-card>
            <div class="charactor mt-3">
              <img :src="currentWord.img" class="charactor_img">
            </div>
            <p v-text="currentWord.string" class="display-1 grey--text text--darken-2" />
            <!-- <div>
              <input id="input-typing" type="text" v-model="typingText" ref="typingArea" v-typeAreaFocus>
            </div> -->
            <v-layout justify-center>
              <v-flex
                xs12
                sm6
                md3>
                <v-text-field
                  id="input-typing"
                  v-model="typingText"
                  ref="typingArea"
                  v-typeAreaFocus
                  type="text"
                  placeholder="Start typing!!"
                  loading>
                </v-text-field>
              </v-flex>
            </v-layout>
            <v-btn
              outline
              color="indigo"
              @click="gameRestart">Restart Game</v-btn>
          </v-container>
        </div>
      </transition>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  name: 'GameDisplay',
  data() {
    return {
      typingText: '',
      solvedWords: [],
      gauge: 'lightgreen',
      words: [
        { string: 'slime', img: require('@/assets/apps/slime.png') },
        { string: 'pippi', img: require('@/assets/apps/pippi.png') },
        { string: 'golden-freeza', img: require('@/assets/apps/freeza.png') },
        { string: 'chocobo', img: require('@/assets/apps/chocobo.png') },
        { string: 'sailor-moon', img: require('@/assets/apps/sailor-moon.png') },
        { string: 'monky-d-rufy', img: require('@/assets/apps/monky-d-rufy.png') },
        { string: 'ito-kaiji', img: require('@/assets/apps/ito-kaiji.png') },
        { string: 'pikachu', img: require('@/assets/apps/pikachu.png') },
        { string: 'toguro-ototo', img: require('@/assets/apps/toguro-ototo.png') },
        { string: 'chibimaruko-chan', img: require('@/assets/apps/chibimaruko-chan.png') },
        { string: 'jack-sparrow', img: require('@/assets/apps/jack-sparrow.png') },
        { string: 'vegeta', img: require('@/assets/apps/vegeta.png') },
        { string: 'crayon_shin-chan', img: require('@/assets/apps/crayon_shin-chan.png') },
        { string: 'edogawa-conan', img: require('@/assets/apps/edogawa-conan.png') },
        { string: 'ushijimakun', img: require('@/assets/apps/ushijimakun.png') }
      ]
    }
  },
  directives: {
    typeAreaFocus: {
      inserted: function(el) {
        el.focus
      }
    }
  },
  mounted() {
    this.$refs.gameDisplay.classList.remove('v-enter-active', 'v-enter')
    this.$nextTick(() => this.$refs.typingArea.focus())
  },
  methods: {
    gameRestart() {
      this.$emit('game-restart')
      this.$store.dispatch('resetHealthA')
      this.$store.dispatch('resetMissCountA')
      this.solvedWords = []
    },
    missEffectEnd() {
      this.$nextTick(() => this.$refs.typingArea.focus())
      this.$nextTick(() => this.$refs.gameDisplay.scrollIntoView())
    }
  },
  computed: {
    currentWord() {
      const unsolvedWords = this.words.filter((word) => {
        return (!this.solvedWords.includes(word))
      })
      const randomIndex = Math.floor(Math.random() * unsolvedWords.length)
      return unsolvedWords[randomIndex]
    },
    currentWordNumber() {
      return this.solvedWords.length + 1
    },
    isCorrect() {
      if(this.typingText === this.currentWord.string) {
        this.solvedWords.push(this.currentWord)
        this.typingText = ''
        if(this.words.length === this.solvedWords.length) {
          this.solvedWords = []
          this.$emit('game-end')
        }
      }
      if(this.typingText === this.currentWord.string.slice(0, this.typingText.length)) {
        return
      }else {
        this.typingText = ''
        this.$store.dispatch('healthA')
        this.$store.dispatch('missCountA')
      }
    },
    currentHealth() {
      if(this.$store.getters.healthG <= 0) {
        this.$emit('game-restart')
      }
      if(this.$store.getters.healthG <= 70) {
        this.gauge = 'orange'
      }
      if(this.$store.getters.healthG <= 30) {
        this.gauge = 'red'
      }
      return this.$store.getters.healthG
    }
  }
}
</script>

<style scoped>
.gameDisplay {
  box-shadow: 1px 1px 3px #8a96dc, -1px -1px 3px #8a96dc;
}
.gauge {
  height: 25px;
}
.charactor {
  width: 100%;
}
.charactor_img {
  max-width: 150px;
  min-width: 50px;
}
@keyframes damage {
  0% {
    background : #CCC;
    opacity: 0.1;
  }
  100% {
    background : #FFF;
  }
}
@keyframes rumble {
    0% {transform: translate(0px, 0px) rotateZ(0deg)}
    25% {transform: translate(2px, 2px) rotateZ(1deg)}
    50% {transform: translate(0px, 2px) rotateZ(0deg)}
    75% {transform: translate(2px, 0px) rotateZ(-1deg)}
    100% {transform: translate(0px, 0px) rotateZ(0deg)}
}
.v-enter-active {
  animation: damage .3s, rumble .1s;
}
</style>
