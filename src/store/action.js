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

const Fetch = Axios.create({
  baseURL: 'https://nameless-eyrie-18321.herokuapp.com/'
});

export default {
  // Movie
  [getMovieAnnual2016]({
    commit
  }) {
    return new Promise(function (resolve, reject) {
      (async() => {
        let res = await Fetch.get('/movie_annual2016');
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
        let res = await Fetch.get(`/movie_annual2016/widget?nth=${nth}`);
        if (typeof res.data.res != 'undefined') {
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
        } else {
          commit('set-movie-widget-infos', {
            nth,
            subject: {
              id: `error${nth}`,
              kind_str: 'error'
            }
          });
        }
        resolve();
      })()
    })
  },
  // Game
  [getGameAnnual2016]({
    commit
  }) {
    return new Promise(function (resolve, reject) {
      (async() => {
        let res = await Fetch.get('/game_annual2016');
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
        resolve();
      })()
    })
  },
  [getGameWidgetInfos]({
    commit
  }, {
    nth
  }) {
    return new Promise(function (resolve, reject) {
      (async() => {
        let res = await Fetch.get(`/game_annual2016/widget?nth=${nth}`);
        if (typeof res.data.res != 'undefined') {
          let {
            id,
            kind_str,
            payload,
            subject,
            subjects,
            people,
            user
          } = res.data.res;
          commit('set-game-widget-infos', {
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
        } else {
          commit('set-game-widget-infos', {
            nth,
            subject: {
              id: `error${nth}`,
              kind_str: 'error'
            }
          });
        }
        resolve();
      })()
    })
  },
  // Book
  [getBookAnnual2016]({
    commit
  }) {
    return new Promise(function (resolve, reject) {
      (async() => {
        let res = await Fetch.get('/book_annual2016');
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
        resolve();
      })()
    })
  },
  [getBookWidgetInfos]({
    commit
  }, {
    nth
  }) {
    return new Promise(function (resolve, reject) {
      (async() => {
        let res = await Fetch.get(`/book_annual2016/widget?nth=${nth}`);
        if (typeof res.data.res != 'undefined') {
          let {
            id,
            kind_str,
            payload,
            subject,
            subjects,
            people,
            user
          } = res.data.res;
          commit('set-book-widget-infos', {
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
        } else {
          commit('set-book-widget-infos', {
            nth,
            subject: {
              id: `error${nth}`,
              kind_str: 'error'
            }
          });
        }
        resolve();
      })()
    })
  },
  // Drama
  [getDramaAnnual2016]({
    commit
  }) {
    return new Promise(function (resolve, reject) {
      (async() => {
        let res = await Fetch.get('/drama_annual2016');
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
        resolve();
      })()
    })
  },
  [getDramaWidgetInfos]({
    commit
  }, {
    nth
  }) {
    return new Promise(function (resolve, reject) {
      (async() => {
        let res = await Fetch.get(`/drama_annual2016/widget?nth=${nth}`);
        if (typeof res.data.res != 'undefined') {
          let {
            id,
            kind_str,
            payload,
            subject,
            subjects,
            people,
            user
          } = res.data.res;
          commit('set-drama-widget-infos', {
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
        } else {
          commit('set-drama-widget-infos', {
            nth,
            subject: {
              id: `error${nth}`,
              kind_str: 'error'
            }
          });
        }
        resolve();
      })()
    })
  },
  // Music
  [getMusicAnnual2016]({
    commit
  }) {
    return new Promise(function (resolve, reject) {
      (async() => {
        let res = await Fetch.get('/music_annual2016');
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
        resolve();
      })()
    })
  },
  [getMusicWidgetInfos]({
    commit
  }, {
    nth
  }) {
    return new Promise(function (resolve, reject) {
      (async() => {
        let res = await Fetch.get(`/music_annual2016/widget?nth=${nth}`);
        if (typeof res.data.res != 'undefined') {
          let {
            id,
            kind_str,
            payload,
            subject,
            subjects,
            people,
            user
          } = res.data.res;
          commit('set-music-widget-infos', {
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
        } else {
          commit('set-music-widget-infos', {
            nth,
            subject: {
              id: `error${nth}`,
              kind_str: 'error'
            }
          });
        }
        resolve();
      })()
    })
  },
}
