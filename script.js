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


// Run-length encoding

var runLengthEncoding = function(str){
  const arr=[];
  let value=1;
  for (let i=0;i<str.length;i++){
      if (str[i]!==str[i+1]){
        alert([value,str[i]])
      arr.push([value,str[i]]);
      value=1;
      } else {
      value++;
      }
  }
  return arr;
}


// Reverse words


function reverseWords(str) {
 let arr = str.split(' ')
 let arrnew = []
  arr.map((i) => {
 arrnew.push(i.split('').reverse().join(''))
})
  return arrnew.join(' ')
          }









