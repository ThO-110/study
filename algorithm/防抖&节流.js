// 防抖
const debounce = (function () {
  let exist = false;
  let i = 0;
  return function () {
    if (exist) return;
    console.log(i++);
    exist = true;
    setTimeout(() => {
      exist = false;
    }, 5000);
  };
})();

// 节流
const throttle = (function () {
  let exist = false;
  let i = 0;
  return function () {
    if (!exist) {
      exist = true;
      setTimeout(() => {
        console.log(i++);
        exist = false;
      }, 3000);
    }
  };
})();
