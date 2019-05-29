<template>
  <div class="top">
    <v-container class="my-5">
      <v-layout
       row
       wrap>
        <h1 class="subheading">{{ this.description }}</h1>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

export default {
  data: function() {
    return {
      description: 'Vue.jsでSPAのポートフォリオを制作してみました！'
    }
  }
}
</script>

<style scoped>
</style>
