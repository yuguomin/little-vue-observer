// import MVVM = require('../js/mvvm');
import MVVM from '../js/mvvm';
const a = document.getElementById('app');
if (a) {
  console.log(1);
  new MVVM({
    el: a,
    data: {
      b: 'xxxx',
      c: 0
    }
  });
}