export default {
  movieWidgetsLength: state => {
    let total = state.movie.widget_infos.length;
    if (total) total -= 1;
    return total;
  },
  movieSubjectsLength: state => {
    return state.movie.subjects_length;
  },
  gameWidgetsLength: state => {
    let total = state.game.widget_infos.length;
    if (total) total -= 1;
    return total;
  },
  gameSubjectsLength: state => {
    return state.game.subjects_length;
  },
  bookWidgetsLength: state => {
    let total = state.book.widget_infos.length;
    if (total) total -= 1;
    return total;
  },
  bookSubjectsLength: state => {
    return state.book.subjects_length;
  },
  dramaWidgetsLength: state => {
    let total = state.drama.widget_infos.length;
    if (total) total -= 1;
    return total;
  },
  dramaSubjectsLength: state => {
    return state.drama.subjects_length;
  },
  musicWidgetsLength: state => {
    let total = state.music.widget_infos.length;
    if (total) total -= 1;
    return total;
  },
  musicSubjectsLength: state => {
    return state.music.subjects_length;
  },
}
