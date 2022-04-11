// // Add function until (and including) the value * WAY 1 *

// function addUpTo(n){
//     let total=0;
//     for (let i=1; i<=n; i++){     // ! -> O(n)
//         total +=i;
//     }
//     return total;
// }

// const test = addUpTo(2);

// console.log(test);

// // Add function until (and including) the value * WAY 2 *

// function addUpToTwo(n){
//     return n * (n+1) / 2;         // ! -> O(1)
// }

// const testTwo = addUpToTwo(2);

// console.log(testTwo);

// //--------------------------------------------------------------------

// // Check the time to execute the two ways
// const performance = require('perf_hooks').performance;

// var t1 = performance.now();
// // addUpTo(1000000000);
// addUpToTwo(1000000000)
// var t2 = performance.now();
// console.log(`Time Elapsed= ${(t2 - t1) / 1000 } seconds.`)

// //-------------------------------------------------------------------

// // Example for O(n2)

// function prinAllPairs(n){
//     for(var i = 0; i < n; i++){
//         for (var j = 0; j < n; j++) {     // ! -> O(n2)
//             console.log(i, j)
//         }
//     }
// }

//_____________________ ANAGRAM CHALLENGE ____________________


// function validAnagram(first, second) {
//     if (first.length !== second.length) {
//       return false;
//     }
  
//     const lookup = {};
  
//     for (let i = 0; i < first.length; i++) {
//       let letter = first[i];
//       // if letter exists, increment, otherwise set to 1
//       console.log('test', lookup[letter] = 1)

//       lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//     }
//     console.log(lookup)
  
//     for (let i = 0; i < second.length; i++) {
//       let letter = second[i];
//       // can't find letter or letter is zero then it's not an anagram
//       if (!lookup[letter]) {
//         return false;
//       } else {
//         lookup[letter] -= 1;
//       }
//     }
  
//     return true;
//   }
  
//   // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
//   validAnagram('anagrams', 'nagaramm')

//_____________________ COUNT UNIQUE VALUES CHALLENGE ____________________
// trouver le nombre de chiffres différents dans un tableau trié



//________ ESSAI

  function countValues(arr){


console.log(arr)
let indexI;
let valueI;

let indexJ = 1;
let valueJ;

let number;

for(let i=0; i < arr.length; i++){
  // console.log("i", i)
  // console.log("arr", arr)
  // console.log("arr[i]", arr[i])
  indexI = i;
  valueI = arr[i];
  // console.log("indexI", indexI, "value", value)
}
// console.log("indexI", indexI)


for(let j = 1; j < arr.length; j++){
  // indexJ = j;
  console.log("arr[j]", arr[j])
  indexJ = j;
  valueJ = arr[j];
  // while(arr[i])
}
console.log("indexI", indexI, "valueI", valueI)
console.log("indexJ", indexJ, "valueJ", valueJ)


// if(valueI != valueJ)

while(valueI != valueJ){
indexJ =+1;
console.log('indexJ', indexJ)
}


//tant que la valeur de i et j === incrementer j sinon incrementer i
    
}
//________



countValues([1,2,3,7,8,9])

function countUniqueValues(arr){
  if(arr.length === 0) return 0;
  var i = 0;
  for(var j = 1; j < arr.length; j++){
      if(arr[i] !== arr[j]){
          i++;
          arr[i] = arr[j]
      }
  }
  return i + 1;
}
countUniqueValues([1,2,2,5,7,7,99])