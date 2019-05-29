const state = {
  health: 100,
  missCount: 0
};

const actions = {
  healthA: ({ commit }) => {
    commit('healthM')
  },
  resetHealthA: ({ commit }) => {
    commit('resetHealthM')
  },
  missCountA: ({ commit }) => {
    commit('missCountM')
  },
  resetMissCountA: ({ commit }) => {
    commit('resetMissCountM')
  }
}

const mutations = {
  healthM: state => {
    state.health = state.health -= 10
  },
  resetHealthM: state => {
    state.health = state.health = 100
  },
  missCountM: state => {
    state.missCount = state.missCount += 1
  },
  resetMissCountM: state => {
    state.missCount = 0
  }
};

const getters = {
  healthG: state => {
    return state.health
  },
  resetHealthG: state => {
    return state.health
  },
  missCountG: state => {
    return state.missCount
  },
  resetMissCountG: state => {
    return state.missCount
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
