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

let arr = [1,2,3,4,5,6,7,8,9];

let res = arr.reduce((initial,element)=>{
    return initial+element+" ";
},[])
console.log(res);   //output = 1 2 3 4 5 6 7 8 9

// tc: O(n)
// sc: O(n)


let arr1= [1,2,3,4,5,6,7,8,9];

let res1 = arr1.reduce((initial,element)=>{
    return initial+element;
},0)
console.log(res1);     //output = 45 (sum of all the element)

// tc: O(n)
// sc: O(1)


let arr2= [1,2,3,4,5];

let res2 = arr2.reduce((initial,element)=>{
    return initial*element;
},1)
console.log(res2);     //output = 120

// tc: O(n)
// sc: O(1)