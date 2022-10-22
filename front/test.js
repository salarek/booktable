const dupa = function (signature, n) {
  let newTab = [...signature];
  if (n > 3) {
    for (let i = 0; i < n - 3; i++) {
      console.log(i);
      newTab.push(
        newTab[newTab.length - 1] +
          newTab[newTab.length - 2] +
          newTab[newTab.length - 3]
      );
    }
  } else {
    newTab.splice(n);
  }
  return newTab;
};

console.log(dupa([1, 2, 3], 2));
