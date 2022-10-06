const AddDebil = function () {
  let Ukasz = 0;
  function changeUkasz(val) {
    Ukasz += val;
  }
  return {
    increment() {
      changeUkasz(1);
    },
    decrement() {
      changeUkasz(-1);
    },
    debil() {
      return Ukasz;
    },
  };
};
const Ukasz = AddDebil();
Ukasz.increment();
if (Ukasz.debil() == 1) {
  console.log("Ukasz to Debil");
}
