<template>
  <div class="apps">
    <h1 class="subheading">
      <span
        v-for="(text, i) in texts"
        :key="i"
        class="pageTitle"
        :style="{ animationDelay: i*100+'ms' }"
        v-text="text"
        ref="addColor"
      />
    </h1>
    <v-layout
     row
     wrap
     class="mt-5">
      <h1 class="subheading">{{ this.description }}</h1>
    </v-layout>
    <v-container>
      <v-layout justify-center>
        <v-flex xs12>
          <div v-if="playing">
            <div class="mb-3">{{ this.summary }}</div>
            <ul><li v-for="(spec, i) in specs" :key="i">{{ spec }}</li></ul>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <component
      :is="currentView"
      @game-start="gameStart"
      @game-end="gameEnd"
      @game-restart="gameRestart">
    </component>
  </div>
</template>

<script>
import pageTitleMixin from '@/mixins/pageTitleMixin'
import GameStartDisplay from '@/components/GameStartDisplay'
import GameDisplay from '@/components/GameDisplay'
import GameEndDisplay from '@/components/GameEndDisplay'

// import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    GameStartDisplay,
    GameDisplay,
    GameEndDisplay
  },
  data() {
    return {
      texts: `Apps`,
      description: 'Vue.jsで制作したアプリの紹介',
      summary: 'v-modelとcomputedを主に使用したタイピングゲームです',
      specs: ['ミス回数をvuexで集計⇒リザルト画面でミス回数を表示',
              'タイピングミスをするとアニメーション',
              'ミスをするとLIFEゲージが減少',
              'ノーミスだとリザルト画面でアニメーション'
      ],
      playing: true,
      currentView: GameStartDisplay
    }
  },
  methods: {
    gameStart() {
      this.currentView = GameDisplay
      this.playing = false
    },
    gameEnd() {
      this.currentView = GameEndDisplay
    },
    gameRestart() {
      this.currentView = GameStartDisplay
      this.playing = true
    }
  },
  mixins: [pageTitleMixin]
}
</script>

<style scoped>
</style>
