<template>
  <div class="works">
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
      <v-layout row>
        <v-tooltip top>
          <v-btn
            small
            flat
            color="grey"
            @click="sortAsc('year')"
            slot="activator">
            <v-icon
              left
              small>arrow_upward</v-icon>
            <span class="caption text-lowercase">昇順</span>
          </v-btn>
          <span>制作日の古い順で並べ替え</span>
        </v-tooltip>
        <v-tooltip bottom>
          <v-btn
            small
            flat
            color="grey"
            @click="sortDesc('year')"
            slot="activator">
            <v-icon
              left
              small>arrow_downward</v-icon>
            <span class="caption text-lowercase">降順</span>
          </v-btn>
          <span>制作日の新しい順で並べ替え</span>
        </v-tooltip>
      </v-layout>
      <v-flex xs10 sm5 md4 class="ml-3">
        <v-text-field v-model="searchWorks"
        placeholder="制作年で絞る ※半角数字"></v-text-field>
      </v-flex>
      <v-layout
        row
        wrap>
        <v-flex
          xs12
          sm6
          md4
          lg3
          v-for="work in filterWorks"
          :key="work.id">
          <v-hover>
            <v-card
              slot-scope="{ hover }"
              :class="`elevation-${hover ? 5 : 0}`"
              class="text-xs-center
              ma-3">
              <a
              v-bind:href="work.url"
              target="_blank">
                <v-card-text>
                  <div>{{ work.year }}</div>
                </v-card-text>
                <v-responsive class="pb-4">
                  <v-avatar size="100">
                    <img v-bind:src="work.src">
                  </v-avatar>
                </v-responsive>
              </a>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import pageTitleMixin from '@/mixins/pageTitleMixin'

export default {
  data: function() {
    return {
      texts: `Works`,
      description: '成果物の紹介',
      works: [
        { id: 1, year : '2016', url: 'https://tabelog.com/osaka/A2701/A270101/27004325/', src: require('@/assets/works/work-01.png') },
        { id: 2, year : '2016', url: 'https://www.lotte.co.jp/entertainment/campaign/lb/2016/', src: require('@/assets/works/work-02.png') },
        { id: 3, year : '2016', url: 'https://www.model-agent.jp/', src: require('@/assets/works/work-03.png') },
        { id: 4, year : '2016', url: 'https://www.oshigoto-lab.com/lp/', src: require('@/assets/works/work-04.png') },
        { id: 5, year : '2017', url: 'http://www.dcraft.co.jp/index.html', src: require('@/assets/works/work-05.png') },
        { id: 6, year : '2017', url: 'https://www.firstcall.md/', src: require('@/assets/works/work-06.png') },
        { id: 7, year : '2017', url: 'http://daco-club.com/', src: require('@/assets/works/work-07.png') },
        { id: 8, year : '2017', url: 'http://www.gift-nakatani.jp/miyama/', src: require('@/assets/works/work-08.png') },
        { id: 9, year : '2017', url: 'https://www.kyoujutsuka-archist.com/', src: require('@/assets/works/work-09.png') },
        { id: 10, year : '2017', url: 'https://www.rakuten.ne.jp/gold/jpavenue/', src: require('@/assets/works/work-10.png') },
        { id: 11, year : '2017', url: 'https://user.meruu.jp/job/', src: require('@/assets/works/work-11.png') },
        { id: 12, year : '2017', url: 'http://pekaiyou.djm.jp/sp_members.html', src: require('@/assets/works/work-12.png') },
        { id: 13, year : '2017', url: 'http://azshino.djm.jp/sp_members.html', src: require('@/assets/works/work-13.png') },
        { id: 14, year : '2017', url: 'http://mdaichi.djm.jp/sp_members.html', src: require('@/assets/works/work-14.png') },
        { id: 15, year : '2018', url: 'http://bkbineko.djm.jp/sp_members.html', src: require('@/assets/works/work-15.png') },
        { id: 16, year : '2018', url: 'http://mjmizuki.djm.jp/sp_members.html', src: require('@/assets/works/work-16.png') },
        { id: 17, year : '2018', url: 'http://uoumi.net/sp_members.html', src: require('@/assets/works/work-17.png') },
        { id: 18, year : '2018', url: 'http://hqhokyu.net/sp_members.html', src: require('@/assets/works/work-18.png') },
        { id: 19, year : '2019', url: 'http://www.subaru-china.cn/', src: require('@/assets/works/work-19.png') },
        { id: 20, year : '2019', url: 'https://www.subaru.jp/', src: require('@/assets/works/work-20.png') },
        { id: 21, year : '2019', url: 'https://recruit.fellowroom.co.jp/2019/', src: require('@/assets/works/work-21.png') },
        { id: 22, year : '2019', url: 'https://www.fellowroom.co.jp/', src: require('@/assets/works/work-22.png') },
        { id: 23, year : '2019', url: 'https://www.subaru-finance.co.jp/', src: require('@/assets/works/work-23.png') }
      ],
      searchWorks: ''
    }
  },
  methods: {
    sortAsc(prop){
      this.works.sort((a, b) => {
        return a[prop] - b[prop]
      })
    },
    sortDesc(prop){
      this.works.sort((a, b) => {
        return b[prop] - a[prop]
      })
    }
  },
  computed: {
    filterWorks() {
      return this.works.filter((work) => {
        return work.year.match(this.searchWorks);
      });
    }
  },
  mixins: [pageTitleMixin]
}
</script>

<style scoped>
img {
  width: 100%;
}
</style>
