//i am talking about Higher Order Function.
// 1. Map
// 2. forEach
// 3. filter
// 4.reduce


// 1. map: return a new Array with the same length or same element;

// let arr = [1,2,3,4,5,55,6,77,888,67];


// let res = arr.map((el,index)=>{
//     return el;

// })
// console.log(res);

// tc : O(n);
// Sc : O(1);





// 2. forEach: returns elements of an array on a new line

// let arr = [1,2,3,4,5,6,7,8,9];
// let arr = ["Anand", "SumanSaurav","Amit"];

// arr.forEach((el)=>{
//     console.log(el);
// });

// tc : O(n)
// sc: O(1)


// let arr = [11,2,3,44,565,43,23,2435];

// let newArr = new Array();
// arr.forEach((el,index)=>{
//     console.log(index);
//     newArr.push(el*2);
// })
// console.log(newArr);

// tc: O(n)
// sc: O(n)







// 3. filter: return a new Array which depens what's output ask

// let arr = ["India","Australia","London","Hongkong"];

// let res = arr.filter((el)=>{
//     return el[0]=="I";
// })
// console.log(res);

// tc: O(n)
// sc: O(1)



// 4. reduce: give a single value or summarise the value

// let arr = [1,2,3,4,5,6,7,8,9];

// let res = arr.reduce((initial,element)=>{
//     return initial+element+" ";
// },[])
// console.log(res);   //output = 1 2 3 4 5 6 7 8 9

// tc: O(n)
// sc: O(n)


// let arr1= [1,2,3,4,5,6,7,8,9];

// let res1 = arr1.reduce((initial,element)=>{
//     return initial+element;
// },0)
// console.log(res1);     //output = 45 (sum of all the element)

// tc: O(n)
// sc: O(1)


// let arr2= [1,2,3,4,5];

// let res2 = arr2.reduce((initial,element)=>{
//     return initial*element;
// },1)
// console.log(res2);     //output = 120 (PRODUCT of all the element with 1 which is line no. 99)

// tc: O(n)
// sc: O(1)


// let arr3= [1,2,3,4,5];

// let res3 = arr3.reduce((initial,element,index)=>{
//     return index*element;
// })
// console.log(res3);     //output = 20

// tc: O(n)
// sc: O(1)




// IMPORTANT: *Chaining of Higher Order Function*

// 1.  Find the sum which are odd.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let res = arr.filter((el)=>{
//     return el % 2 == 1;
// })
// .reduce((initial,el)=>{
//     return initial+el;
// })
// console.log(res);  //output = 16 (1+3+5+7)


//tc: O(n^2)
//sc: O(1)



// 2. print the sum of length, whose length is odd.


// 1st method:

// let arr1 = ["John", "Victor", "Wilson", "Ram", "Saurav", "Suman","Anand"];

// let res1 = arr1.filter((el)=>{
//     return el.length % 2 === 1;
// })
// .map((el)=>{
//     return el.length;
// })
// .reduce((initial,element)=>{
//     return initial+element;
// },0)
// console.log(res1)

// tc: O(n^3)
// sc:O(1)

// let arr2 = ["John", "Victor", "Wilson", "Ram", "Saurav", "Suman","Anand"];

// let res2 = arr2.filter((el)=>{
//     return el.length % 2 === 1;
// })
// .reduce((initial,element)=>{
//     return initial+element.length;
// },0)
// console.log(res2);

// tc:O(n^2)
// scO(1)

// 3. print the full name who is from India

// let users = [
//     { firstName: "Suman", lastName: "Saurav", place: "India" },
//     { firstName: "Ram", lastName: "Kumar", place: "India" },
//     { firstName: "Wilson", lastName: "Victor", place: "USA" },
//     { firstName: "John", lastName: "Michael", place: "Australia" },
//   ];

// //1st method:

//   let res = users.filter((el)=>{
//     return el.place === "India";
//   })
//   .map((el)=>{
//     return el.firstName+" "+el.lastName;
//   })
//   .forEach((el)=>{
//     console.log(el);
//   })



let users = [
    { firstName: "Suman", lastName: "Saurav", place: "India" },
    { firstName: "Ram", lastName: "Kumar", place: "India" },
    { firstName: "Wilson", lastName: "Victor", place: "USA" },
    { firstName: "John", lastName: "Michael", place: "Australia" },
  ];

//2nd method:

  let res = users.filter((el)=>{
    return el.place === "India";
  })
  .forEach((el)=>{
    console.log(el.firstName+" "+el.lastName);
  })
