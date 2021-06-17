import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  account: {},
  transactions: []
})

export const mutations = {
  setAccountDetails (state, data) {
    state.account = data || []
  },

  setTransactions (state, data) {
    state.transactions = data.transactions || []
  },

  updateTransaction (state, data) {
    state.transactions = state.transactions.map((x) => {
      if (x.id === data.id) {
        x = { ...x, ...data }
      }
      return x
    })
  }
}

export const actions = {

  async getAccountDetails ({ commit }, id) {
    const resp = await this.$axios.$get(`/api/account/${id}`)
    commit('setAccountDetails', resp)
  },

  async getTransactions ({ commit }, params) {
    const resp = await this.$axios.$get('/api/transactions')
    commit('setTransactions', resp)
  },

  async updateTransaction ({ commit }, params) {
    await this.$axios.$patch(`/api/transactions/${params.id}`, params)
    commit('updateTransaction', params)
  }
}
