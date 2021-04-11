const cycle = (obj, parent) => {
  const parentArr = parent || [obj];
  for (let i in obj) {
    if (typeof obj[i] === "object") {
      parentArr.forEach((pObj) => {
        if (obj[i] === pObj) obj[i] = "[cycle]";
      });
      cycle(obj[i], [...parentArr, obj[i]]);
    }
  }
  return obj;
};

const a = {
  b: {
    c: {},
    e: {
      f: 1,
      p: {},
    },
  },
};
a.b.c.d = a;
a.b.e.p = a;
console.log(cycle(a));
