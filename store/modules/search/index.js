const state = {
  search: ''
}

const mutations = {
  SEARCH_PRODUCT(state, payload) {
    state.search = payload;
  }
}

const actions = {
  setSearchProduct({ commit }, product) {
    commit('SEARCH_PRODUCT', product)
  }
}
const getters = {
  search: state => state.search,
}

const searchModule = {
  state,
  mutations,
  actions,
  getters
}

export default searchModule
