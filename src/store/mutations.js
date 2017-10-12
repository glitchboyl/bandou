import {
  setMovieAnnual2016,
  setMovieWidgetInfos,
  setGameAnnual2016,
  setGameWidgetInfos,
  setBookAnnual2016,
  setBookWidgetInfos,
  setDramaAnnual2016,
  setDramaWidgetInfos,
  setMusicAnnual2016,
  setMusicWidgetInfos,
  setY,
  changeStatus,
  changeView,
} from './mutations-types';

export default {
  // Movie
  [setMovieAnnual2016](state, {
    pv,
    payload,
    widget_infos
  }) {
    state.movie.pv = pv;
    state.movie.payload = payload;
    state.movie.widget_infos = widget_infos;
  },
  [setMovieWidgetInfos](state, {
    nth,
    subject
  }) {
    state.movie.subjects[nth] = subject;
    state.movie.subjects_length = state.movie.subjects.length;
  },
  // Game
  [setGameAnnual2016](state, {
    pv,
    payload,
    widget_infos
  }) {
    state.game.pv = pv;
    state.game.payload = payload;
    state.game.widget_infos = widget_infos;
  },
  [setGameWidgetInfos](state, {
    nth,
    subject
  }) {
    state.game.subjects[nth] = subject;
    state.game.subjects_length = state.game.subjects.length;
  },
  // Book
  [setBookAnnual2016](state, {
    pv,
    payload,
    widget_infos
  }) {
    state.book.pv = pv;
    state.book.payload = payload;
    state.book.widget_infos = widget_infos;
  },
  [setBookWidgetInfos](state, {
    nth,
    subject
  }) {
    state.book.subjects[nth] = subject;
    state.book.subjects_length = state.book.subjects.length;
  },
  // Drama
  [setDramaAnnual2016](state, {
    pv,
    payload,
    widget_infos
  }) {
    state.drama.pv = pv;
    state.drama.payload = payload;
    state.drama.widget_infos = widget_infos;
  },
  [setDramaWidgetInfos](state, {
    nth,
    subject
  }) {
    state.drama.subjects[nth] = subject;
    state.drama.subjects_length = state.drama.subjects.length;
  },
  // Music
  [setMusicAnnual2016](state, {
    pv,
    payload,
    widget_infos
  }) {
    state.music.pv = pv;
    state.music.payload = payload;
    state.music.widget_infos = widget_infos;
  },
  [setMusicWidgetInfos](state, {
    nth,
    subject
  }) {
    state.music.subjects[nth] = subject;
    state.music.subjects_length = state.music.subjects.length;
  },
  // Y
  [setY](state, {
    y
  }) {
    state.Y = y;
  },
  // Scroll status
  [changeStatus](state, {
    status
  }) {
    state.resolve = status;
  },
  // View
  [changeView](state, {
    status
  }) {
    state.isPhone = status;
  },
}
