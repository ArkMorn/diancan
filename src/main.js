import Vue from 'vue'
import App from './App'
import store from './store'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$store = store;

Number.prototype.add = function(arg) {  //解决加法js64位浮点数精度问题
    var r1, r2, m, c, arg1, arg2;
    try {
      r1 = this.toString().split(".")[1].length;
    }
    catch (e) {
      r1 = 0;
    }
    try {
      r2 = arg.toString().split(".")[1].length;
    }
    catch (e) {
      r2 = 0;
    }
    c = Math.abs(r1 - r2);
    m = Math.pow(10, Math.max(r1, r2));
    if (c > 0) {
      var cm = Math.pow(10, c);
      if (r1 > r2) {
        arg1 = Number(this.toString().replace(".", ""));
        arg2 = Number(arg.toString().replace(".", "")) * cm;
      } else {
        arg1 = Number(this.toString().replace(".", "")) * cm;
        arg2 = Number(arg.toString().replace(".", ""));
      }
    } else {
      arg1 = Number(this.toString().replace(".", ""));
      arg2 = Number(arg.toString().replace(".", ""));
    }
    return (arg1 + arg2) / m;
  };
  
  Number.prototype.mul = function(arg) { //解决乘法js64位浮点数精度问题
    var m = 0, s1 = this.toString(), s2 = arg.toString();
    try {
      m += s1.split(".")[1].length;
    }
    catch (e) {
    }
    try {
      m += s2.split(".")[1].length;
    }
    catch (e) {
    }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
  };

const app = new Vue(App)
app.$mount()
