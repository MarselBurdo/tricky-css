var a, b, c;

// (
//    //var c = 3;
//     () => {
//   let a = 1;
//   let b = 2;
//   var c = 3;
// }

// )();
function foo() {
  let a = 1;
  let b = 2;
  var c = 3;
}
foo();

// if (true) {
//   let a = 1;
//   const b = 2;
//   var c = 3;
// }

console.log(a, b, c);
