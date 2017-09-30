import TWEEN from '@tweenjs/tween.js';

export default function (e) {
  let self = this;
  let {
    Y,
    resolve
  } = self.$store.state;
  if (resolve) {
    self.$store.commit('change-status', {
      status: false
    });
    let {
      kind,
      nth
    } = self.$route.params;
    let [oldY, newY] = [parseInt(Y), parseInt(Y)];
    if (e.deltaY == 100) {
      if (parseInt(nth) + 1 == self.$store.getters[`${kind}WidgetsLength`]) {
        self.$store.commit('change-status', {
          status: true
        });
        return;
      }
      newY -= 100;
    } else if (e.deltaY == -100) {
      if (parseInt(nth) == 0) {
        self.$store.commit('change-status', {
          status: true
        });
        return;
      }
      newY += 100;
    }
    if (parseInt(Math.abs(newY / -100)) <= self.$store.getters[`${kind}WidgetsLength`]) {
      function animate() {
        if (TWEEN.update())
          requestAnimationFrame(animate);
      }
      new TWEEN.Tween({
          tweeningNumber: oldY
        })
        .easing(TWEEN.Easing.Quadratic.Out)
        .to({
          tweeningNumber: newY
        }, 600)
        .onUpdate(that => {
          self.$store.commit('set-y', {
            y: that.tweeningNumber.toFixed(2)
          });
          if (self.$store.state.Y == newY && !(self.$store.state.Y % 100)) {
            self.$store.commit('change-status', {
              status: true
            });
            self.$router.push(`/${kind}/annual2016/${parseInt(Math.abs(newY / -100))}`);
          }
        })
        .start();
      animate();
    } else
      self.$store.commit('change-status', {
        status: true
      });
  }
}
