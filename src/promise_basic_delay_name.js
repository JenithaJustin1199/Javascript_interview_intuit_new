function delayMyNamePromise() {
  return new Promise((resolve, reject) => {
    console.log("Jenitha");
    setTimeout(() => {
      resolve("J");
    }, 3000);
  });
}

// const delayMyName = delayMyNamePromise();
// delayMyName.then((res) => {
//   console.log(res);
// });

async function delayMyName() {
  const res = await delayMyNamePromise();
  console.log(res);
}
delayMyName();
