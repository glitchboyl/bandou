import Axios from 'axios';
import {
  getMovieAnnual2016,
  getMovieWidgetInfos,
  getGameAnnual2016,
  getGameWidgetInfos,
  getBookAnnual2016,
  getBookWidgetInfos,
  getDramaAnnual2016,
  getDramaWidgetInfos,
  getMusicAnnual2016,
  getMusicWidgetInfos,
} from './mutations-types';

export default {
  [getMovieAnnual2016]({
    commit
  }) {
    return new Promise(function (resolve, reject) {
      (async() => {
        let res = await Axios.get('/movie_annual2016');
        let {
          pv,
          payload,
          widget_infos
        } = res.data.res;
        commit('set-movie-annual-2016', {
          pv,
          payload,
          widget_infos
        });
        resolve();
      })()
    })
  },
  [getMovieWidgetInfos]({
    commit
  }, {
    nth
  }) {
    return new Promise(function (resolve, reject) {
      (async() => {
        let res = await Axios.get(`/movie_annual2016/widget?nth=${nth}`);
        let {
          id,
          kind_str,
          payload,
          subject,
          subjects,
          people,
          user
        } = res.data.res;
        commit('set-movie-widget-infos', {
          nth,
          subject: {
            id,
            kind_str,
            payload,
            subject,
            subjects,
            people,
            user
          }
        });
        resolve();
      })()
    })
  },
  [getGameAnnual2016]({
    commit
  }) {
    Axios.get('/game_annual2016').then(function (res) {
      let {
        pv,
        payload,
        widget_infos
      } = res.data.res;
      commit('set-game-annual-2016', {
        pv,
        payload,
        widget_infos
      });
    })
  },
  [getBookAnnual2016]({
    commit
  }) {
    Axios.get('/book_annual2016').then(function (res) {
      let {
        pv,
        payload,
        widget_infos
      } = res.data.res;
      commit('set-book-annual-2016', {
        pv,
        payload,
        widget_infos
      });
    })
  },
  [getDramaAnnual2016]({
    commit
  }) {
    Axios.get('/drama_annual2016').then(function (res) {
      let {
        pv,
        payload,
        widget_infos
      } = res.data.res;
      commit('set-drama-annual-2016', {
        pv,
        payload,
        widget_infos
      });
    })
  },
  [getMusicAnnual2016]({
    commit
  }) {
    Axios.get('/music_annual2016').then(function (res) {
      let {
        pv,
        payload,
        widget_infos
      } = res.data.res;
      commit('set-music-annual-2016', {
        pv,
        payload,
        widget_infos
      });
    })
  }
}
