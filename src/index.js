// const rect = require("./rectangle");

// // rect.area(10,20)
// // rect.perimtr(10,50)

// // const solveRect = (l, w) => {
// //   if (l <= 0 || w <= 0) {
// //     console.log(new Error("Length And Width Must Be Grater Then 0"));
// //   } else {
// //     rect.area(l,w);
// //     rect.perimtr(l,w);
// //   }
// // };

// // solveRect(10,96);
// // solveRect(50,-96)


// rect(20, 40, (err, area, perimeter) => {
//   if (err) {
//       console.log(err);
//   } else {
//       console.log('Area Of Rectangle', area);
//       console.log('Parameter of Rectangle', perimeter);
//   }
// })

const salary = require("./salary")

salary(1200,(err,bounus) => {
  if(err){
        console.log(err)
    }else{
        console.log("Your Bounus Is :",bounus) 
    }
})