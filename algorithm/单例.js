// 弹窗例子
const singleton = (function () {
  let pop = false;
  return function () {
    if (pop) console.log("pop has exist--");
    else {
      pop = true;
      console.log("pop is open!!");
      setTimeout(() => {
        pop = false;
        console.log("pop is close..");
      }, 2000);
    }
  };
})();
