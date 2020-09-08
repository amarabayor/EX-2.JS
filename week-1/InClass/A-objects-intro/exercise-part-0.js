/*

Describe your own laptop as a JavaScript object

Try to think of as many properties as you can!

*/

let laptop = {
    brand: "Lenovo",
    screenSize: 13,
    isTouchscreen: true,
  };

  //my laptop;
  let mylaptop = {
    brand: "Lenovo",
    screenSize: 13,
    memory: "3,7Gi",
    cputype:  "intelcore",
    keybordType:"SpanisKeyBord",
    color:"black",
    touchscreen:false,
  }
  console.log(mylaptop.brand);

  let car = {
    brand: "Seat",
    model: "Arona",
    color: "White",
  };
  
  console.log(Object.values(car));
  // prints [ 'brand', 'model', 'color' ]
  