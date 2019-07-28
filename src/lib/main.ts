// import MVVM = require('../js/mvvm');
import MVVM from '../js/mvvm';
const vm = new MVVM({
  el: '#app',
  data: {
    message: 'xxxx',
    initData: {
      name: 'Y&GM'
    },
    name: 0
  }
});