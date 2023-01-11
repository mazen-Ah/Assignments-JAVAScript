const myPromise = new Promise((res, rej) => {
  let connect = false;
  if (connect) {
    res("Connection Esablished");
  } else {
    rej(Error("Connection Faile hhh"));
  }
});
console.log(myPromise);
myPromise.then(
  (q) => console.log(`Good ${q}`),
  (w) => console.log(`Bad ${w}`)
);
