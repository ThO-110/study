const extendCopy = (from, to) => {
  var to = to || {};
  for (i in from) {
    to[i] = from[i];
  }
  return to;
};

const deepCopy = (from, to) => {
  var to = to || {};
  for (i in from) {
    if (typeof from[i] === "object") {
      to[i] = from[i].constructor === Object ? {} : []; // 这步很重要
      deepCopy(from[i], to[i]);
    } else {
      to[i] = from[i];
    }
  }
  return to;
};

const deepCopy2 = (from) => {
  let res = {};
  for (let item in from) {
    Object.defineProperty(
      res,
      item,
      Object.getOwnPropertyDescriptor(from, item)
    );
  }
  return res;
};

const obj = {
  a: 1,
  b: [1, 2, 3],
  c: {
    d: {
      e: 3,
    },
  },
};

const o = deepCopy2(obj);
console.log(o);
