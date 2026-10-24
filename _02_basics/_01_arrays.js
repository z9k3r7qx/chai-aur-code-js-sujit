let myarr = [1,2,3,4]

let myarr2 = new Array(3,2,1)

myarr2.push(222);
myarr2.pop();
myarr2.unshift(1);
myarr2.shift();


let ans = myarr.includes(22);
let ans2 = myarr.indexOf(2);

// changing the original array
myarr.splice(1,2)

// not changing in original array
myarr.slice(1,2);

let a1 = [1,2,3,4];
let a2 = [5,6];
let a3 = a1.push(a2);
// let a4 = a1.concat(a2);