 "use strict";
 var a = [1,2,3,4];
 var b = [1,2,3,4,5,6];
 console.log(a.every(item_a =>{
     return b.some(item_b => {
         return item_a===item_b;});
 }));
