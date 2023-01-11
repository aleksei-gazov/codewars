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





