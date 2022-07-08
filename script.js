// var a, b, c;

// // //var c = 3;
// (() => {
//   let a = 1;
//   let b = 2;
//   var c = 3;
// })();
// function foo() {
//   let a = 1;
//   let b = 2;
//   var c = 3;
// }
// foo();

// if (true) {
//   let a = 1;
//   const b = 2;
//   var c = 3;
// }

// console.log(a, b, c);

// console.log(b);
// // // let с = JSON.parse("{a:\'abc\'}")
// console.log(a);

// let a = 1;
// const b = 4;
// [1, 2, 3, 5].reduce((a, c) => {}, 0);

// const obj = {
//   some: 3,
//   tut: function tut() {
//     return this.some * 2;
//   },
//   tam: () => {
//     // console.dir(this);
//     return this.some * 2;
//   },
// };

// console.log(obj.tut());
// console.log(obj.tam());

const areYouReady = (answer) =>
  new Promise((res, rej) => {
    if (answer) {
      res("yes");
    } else {
      rej("no");
    }
  });

areYouReady(true)
  .then((data) => {
    console.log(data);
    return areYouReady(false);
  })
  .then((data) => {
    console.log(data);
    return areYouReady(true);
  })
  .catch((error) => {
    console.log(error);
    return "Are you sure?";
  })
  .catch((error) => console.log(error));

// yes no
