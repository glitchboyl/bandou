import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './action';
import getters from './getters';

Vue.use(Vuex);

const state = {
  movie: {
    pv: 0,
    payload: null,
    widget_infos: [],
    subjects: []
  },
  game: {
    pv: 0,
    payload: null,
    widget_infos: [],
    subjects: []
  },
  book: {
    pv: 0,
    payload: null,
    widget_infos: [],
    subjects: []
  },
  drama: {
    pv: 0,
    payload: null,
    widget_infos: [],
    subjects: []
  },
  music: {
    pv: 0,
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
