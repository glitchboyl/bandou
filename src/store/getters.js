export default {
  movieWidgetsLength: state => {
    let total = state.movie.widget_infos.length;
    if (total) total -= 1;
    return total;
  },
  gameWidgetsLength: state => {
    let total = state.game.widget_infos.length;
    if (total) total -= 1;
    return total;
  },
  bookWidgetsLength: state => {
    let total = state.book.widget_infos.length;
    if (total) total -= 1;
    return total;
  },
  dramaWidgetsLength: state => {
    let total = state.drama.widget_infos.length;
    if (total) total -= 1;
    return total;
  },
  musicWidgetsLength: state => {
    let total = state.music.widget_infos.length;
    if (total) total -= 1;
    return total;
  }
}
