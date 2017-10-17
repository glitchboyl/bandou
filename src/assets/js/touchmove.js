export default {
  inserted(el, binding) {
    const scroll = binding.value;
    let startY, endY;
    el.addEventListener('touchstart', ($event) => {
      startY = $event.changedTouches[0].clientY;
    });
    el.addEventListener('touchend', ($event) => {
      endY = $event.changedTouches[0].clientY;
      if (startY > endY) scroll({
        deltaY: 100
      });
      else if (startY < endY) scroll({
        deltaY: -100
      });
    });
  }
}
