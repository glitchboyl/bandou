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
    subjects: [],
    subjects_length: 0
  },
  game: {
    pv: 0,
    payload: null,
    widget_infos: [],
    subjects: [],
    subjects_length: 0
  },
  book: {
    pv: 0,
    payload: null,
    widget_infos: [],
    subjects: [],
    subjects_length: 0
  },
  drama: {
    pv: 0,
    payload: null,
    widget_infos: [],
    subjects: [],
    subjects_length: 0
  },
  music: {
    pv: 0,
    payload: null,
    widget_infos: [],
    subjects: [],
    subjects_length: 0
  },
  Y: 0,
  resolve: true
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
