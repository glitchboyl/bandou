import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './action';
import getters from './getters';

Vue.use(Vuex);

const state = {
  movie: {
    payload: null,
    widget_infos: [],
    subjects: []
  },
  game: {
    payload: null,
    widget_infos: [],
    subjects: []
  },
  book: {
    payload: null,
    widget_infos: [],
    subjects: []
  },
  drama: {
    payload: null,
    widget_infos: [],
    subjects: []
  },
  music: {
    payload: null,
    widget_infos: [],
    subjects: []
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
