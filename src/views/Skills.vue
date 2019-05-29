<template>
  <div class="skills">
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
      <v-layout
        row
        wrap>
        <v-flex
          xs12
          sm6
          md4
          lg3
          v-for="skill in skills"
          :key="skill.id">
          <v-card
            flat
            class="text-xs-center
            ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="80">
                <img v-bind:src="skill.src">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading mb-2">{{ skill.name }}</div>
              <v-rating
                v-model="skill.level"
                half-increments
                small></v-rating>
            </v-card-text>
          </v-card>
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
      texts: `Skills`,
      description: 'フロントエンドスキルレベル',
      skills: [
        { id: 1, name: 'HTML', level: 4, src: require('@/assets/logos/logo-html.png') },
        { id: 2, name: 'CSS', level: 4, src: require('@/assets/logos/logo-css.png') },
        { id: 3, name: 'JavaScript', level: 3.5, src: require('@/assets/logos/logo-js.png') },
        { id: 4, name: 'jQuery', level: 4, src: require('@/assets/logos/logo-jquery.png') },
        { id: 5, name: 'Node-js', level: 2, src: require('@/assets/logos/logo-nodeJs.png') },
        { id: 6, name: 'npm', level: 3, src: require('@/assets/logos/logo-npm.png') },
        { id: 7, name: 'Php', level: 2, src: require('@/assets/logos/logo-php.png') },
        { id: 8, name: 'WordPress', level: 2, src: require('@/assets/logos/logo-wp.png') },
        { id: 9, name: 'Ruby', level: 2, src: require('@/assets/logos/logo-ruby.png') },
        { id: 10, name: 'Ruby-on-Rails', level: 2, src: require('@/assets/logos/logo-rails.png') },
        { id: 11, name: 'Python', level: 1, src: require('@/assets/logos/logo-py.png') },
        { id: 12, name: 'Git', level: 2.5, src: require('@/assets/logos/logo-git.png') },
        { id: 13, name: 'Photoshop', level: 3.5, src: require('@/assets/logos/logo-ps.png') },
        { id: 14, name: 'XD', level: 2.5, src: require('@/assets/logos/logo-xd.png') },
        { id: 15, name: 'React', level: 1.5, src: require('@/assets/logos/logo-react.png') }
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
  border-radius: 0;
}
</style>
