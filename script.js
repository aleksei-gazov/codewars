//Multiples of 3 or 5
function solution(number){
let sum = 0;
while(number > 0) {
  number--
   if(number % 3 === 0 || number % 5 === 0) {
     sum += number
  }
}
return sum
}

// Length of missing array

function getLengthOfMissingArray(arrayOfArrays) {
 const lengths = (arrayOfArrays || [])
    .map(a => a ? a.length : 0)
    .sort((a, b) => a - b)
  
  if (lengths.includes(0)) {
    return 0
  }

  for (let i = 0; i < lengths.length - 1; i++) {
    if (lengths[i] + 1 !== lengths[i + 1]) {
      return lengths[i] + 1
    }
  }

  return 0
}


// A pair of gloves 

function numberOfPairs(gloves)
{
 let counts = {};
let two_dimensial_arr = [];
let val;
let sub_arr;
let sum = 0;

for (let i = 0; i < gloves.length; i++)
{
    val = gloves[i];
    
    if (!counts.hasOwnProperty(val))
    {
        counts[val] = 0;
    }

    counts[val]++;
}

for (key in counts)
{
    if (counts.hasOwnProperty(key))
    {
      
        sub_arr = [];
        
        for (var j = counts[key]; j > 0; j--)
        {
                     sub_arr.push(key);
        }
             
        two_dimensial_arr.push(sub_arr);
    }
}
for(let i = 0; i < two_dimensial_arr.length; i++) {
if(Math.floor(two_dimensial_arr[i].length / 2) > 0) {
  sum += Math.floor(two_dimensial_arr[i].length / 2)
} 
}
return sum
}


// Are they the "same"?

function comp(array1, array2){
  if(array11 === null || array2 === null) return false
let a = [];
let b = []
a =  (array1.map((i)=>{ return i * i
})).sort((a, b)=>{return a-b})
b = array2 .sort((a, b)=>{return a-b})
return JSON.stringify(a) == JSON.stringify(b)
}


// String ends with?

function solution(str, ending){
  if(ending === '') {
      return true
  } else
  return str.split('').slice(-ending.length).join('') === ending
  }


// The highest profit wins!

function minMax(arr){
  if(arr.length === 1) {
    return [arr[arr.length-1], arr[arr.length-1]]
  }
  let a = arr.sort((a,b)=> a-b).pop()
  let b = arr.sort((a,b)=> a-b).shift() 
  return [b, a]; // fix me!
}


// Persistent Bugger.
function persistence(num) {
   let i = 0
  while(num.toString().length !== 1){
    num = num.toString().split("").reduce((a,b)=> a*b)
    i++
  }
  return i
}


// Write Number in Expanded Form

function expandedForm(num) {
let multiple = 10;
  let result = [];
  while (num > 1){
    let remainder = num%multiple;
    if(remainder >0){
      result.unshift(remainder);
    }
    num -= remainder;
    multiple = multiple * 10;
  }
  return result.join(" + ");
}

// Who likes it?

function likes(names) {
  let a = new Set(names)
  let b = []
  let num = names.length - 2
  for (let key of a) {
    b.push(key)
  
}

    let start = b.length>2 ? b.slice(0, 2).join(', ') : b.slice(0, 1).join(', ')
    let end = b.slice(-1).join(' ')
  if(!b.length) {
    return 'no one likes this'
  }else
  if(b.length ==1) {
 return `${start} likes this`
  } else
  if(b.length !==0 && b.length <= 3) {
 return `${start} and ${end} like this`
  } else
  if(b.length > 3) {
  return `${start} and ${num} others like this`
  }
}


// Maximum subarray sum

// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

var maxSequence = function(arr){
   if(arr.length === 0) return 0 
  let result =0
  let sum = 0 
  for(let item of arr ) {
    sum += item
    result = Math.max(sum, result)
    if(sum < 0) sum = 0
  }
 return result
}


// Exes and Ohs

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let a = 0;
    let b = 0;
    for(let i =0; i< str.length; i++) {
     if( str[i].toLowerCase() === 'o' ) a+=1
     if(str[i].toLowerCase() === 'x' ) b +=1  
    }  
    return a === b
}


// Sum Mixed Array

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


function sumMix(x){
 let sum = x.reduce((acc, next) => +acc + +next)
return sum
}
    console.log(sumMix([9, 3, '7', '3']))
    // , 22);
  console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]))
// //  , 42); 
     console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']))
//     // , 41); 



// List Filtering

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
return l.filter((i)=> {
if(typeof (i) === 'number'){
return true
}})
}
console.log(filter_list([1,2,'a','b']))
console.log(filter_list([1,'a','b',0,15]))


//Unique In Order
//Implement the function unique_in_order which takes as argument a sequence and 
//returns a list of items without any elements with the same value next to each other
//and preserving the original order of elements.

var uniqueInOrder=function(iterable){
  let arrResult = []
  if(Array.isArray(iterable)) {
iterable.join().split(',').map((i, ind, arr)=>{
if(arrResult.length === 0) {
  if(!isNaN(i)) {
arrResult.push(+i)
  } else arrResult.push(i)
} else if(arrResult[arrResult.length-1] != i) {
   if(!isNaN(i)) {
arrResult.push(+i)
  }else arrResult.push(i)
}
} )
  } else {
let a = iterable.split('')
 a.map((i, ind, arr)=>{
if(arrResult.length === 0) {
  arrResult.push(i)
} else if(arrResult[arrResult.length-1] !== i) {
  arrResult.push(i)
}
} )
  }

return arrResult
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder([1,2,2,3,3]) )
console.log(uniqueInOrder(['a','s','s','d','d']) )


Extract the domain name from a URL

function domainName(url){
if(url.includes('http')) {
  let a = new URL(url).host
  let b = a.split('.')
  return b[0]
} else {
  let a = url.split('.')
  return a[1]
}
}













