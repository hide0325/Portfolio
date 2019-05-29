<template>
  <div class="about">
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
    <v-container class="mb-5">
      <v-card
        flat
        v-for="module in modules"
        :key="module.id"
        class="pa-3">
        <v-layout
          row
          wrap
          class="pa-3">
          <v-flex
           xs12
           md2
           text-xs-center>
            <v-responsive>
              <v-avatar size="80">
                <img v-bind:src="module.src">
              </v-avatar>
            </v-responsive>
            <div
              class="subheading
              my-2">{{ module.name }}</div>
          </v-flex>
          <v-flex
            xs12
            md4
            text-xs-center>
            <v-rating
              v-model="module.level"
              half-increments></v-rating>
          </v-flex>
          <v-flex
            xs12
            md6>
            <div>{{ module.mastery }}</div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import pageTitleMixin from '@/mixins/pageTitleMixin'

export default {
  data: function() {
    return {
      texts: `About`,
      description: 'ポートフォリオ制作時に使用したライブラリとその理解度',
      modules: [
        { id: 1, name: 'vue', level: 3, src: require('@/assets/vues/vue.png'), mastery: 'メイン。主要ディレクティブの使用方法、props/emit/イベントバスによるコンポーネント間のデータの受け渡し、単一コンポーネント（SFC）、各種フック等・・基本的な事は理解しているつもりです' },
        { id: 2, name: 'vue-router', level: 2.5, src: require('@/assets/vues/vue-router.png'), mastery: 'SPAにしたかったので使用。基本的なルーディングのコーディングは実装できる...はす！ネストされたルーティングだと不安あり...' },
        { id: 3, name: 'vuex', level: 2.5, src: require('@/assets/vues/vuex.png'), mastery: 'この規模のサイトであれば、実務で使用する事はないと思いますが、無理やり使ってみました。storeの概念（Fluxアーキテクチャ）は理解しているつもりですが、入り組んだコンポーネント間のstateの共有にとても不安あり...' },
        { id: 4, name: 'vuetify', level: 3, src: require('@/assets/vues/vuetify.png'), mastery: 'マテリアルデザインをに試したかったので使用しました。cssフレームワークのbootstrapとほぼ同じ感覚で使用できました' },
        { id: 5, name: 'babel', level: 3, src: require('@/assets/vues/babel.png'), mastery: 'とりあえず' }
      ]
    }
  },
  mixins: [pageTitleMixin]
}
</script>

<style scoped>
img {
  width: 80%;
  height: auto;
}
</style>
