// ------FREQUENCY COUNTER - Same frequency------

// 2 positive integers -> find out if the two numbers have the same frequency of digits
// must return boolean

function sameFrequency(number1, number2){

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    var digits1 = number1.toString().split('');
    var digits2 = number2.toString().split('');

    if(digits1.length !== digits2.length){
        // console.log('false')
        return false;
    }

    for(let val of digits1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of digits2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1 
    }

    for(let key in frequencyCounter1){


        if(!(key in frequencyCounter2)){
            // console.log('false', key)
            return false
        }
    }
    // console.log('true')
    return true
    
};

sameFrequency(3589578, 5879385);

// ------MULTIPLE POINTERS - Are there duplicates------

// Accepts a variable number of arguments


function areThereDuplicates(...arg){

arg.sort((a,b) => a > b);

    let left = 0;
    let right = 1;
   

    while(right < arg.length){
        if(arg[left] === arg[right]){
            // console.log('true')
            return true;
        }

right ++;
left ++;
    }
    // console.log('false')
    return false
 
}

areThereDuplicates('a', 'b', 'c', 'a')

// ------FREQUENCY COUNTER - Are there duplicates------

// function areThereDuplicates() {
//     let collection = {}
//     for(let val in arguments){
//       collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
//     }
//     for(let key in collection){
//       if(collection[key] > 1)      console.log('hello');
//       return true
//     }
//     console.log('pas hello');
//     return false;
//   }

//   areThereDuplicates(1, 2, 2)


 // ------ONE LINER SOLUTION - Are there duplicates------

 function areThereDuplicates() {
    //  console.log('size', new Set(arguments).size )
    //  console.log('length', arguments.length )
    //  console.log('visu', new Set(arguments).size !== arguments.length);
     console.log('arg', arguments)
    // return new Set(arguments).size !== arguments.length;
  }

  areThereDuplicates()



// ------MULTIPLE POINTERS - Average Pair------
// Given a sorted array of integers and a target average.
// Determine if there a pair of values in the array where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

// Prend un tableau trié d'entier

function averagePair(arr, num){
    let start = 0
    let end = arr.length-1;
    while(start < end){
      let avg = (arr[start]+arr[end]) / 2 
      if(avg === num) {
          console.log('true');
      return true;}
      else if(avg < num) start++
      else end--
    }
        console.log('false');
    return false;
  }
  averagePair([1, 2, 3],2.5)

// function averagePair(arr, average){      ------ EXO A REFAIRE -----
//     if(arr.length === 0) {
//         console.log('false');
//         return false };
//     let left = 0;
//     let right = arr.length - 1;
//     while(left < right){
//         console.log('arr', (arr[left] + arr[right]));
  
// let sum = (arr[left] + arr[right])/2;
// if(sum === average){
//     console.log('true');
//     return true}
// else if(sum < average){        
//     console.log('arr2', (arr[left] + arr[right]));
// left ++}
// else {right --}
// console.log('arr3', (arr[left] + arr[right]));

//     console.log('false');
//     return false;
// }}

// averagePair([1, 2, 3],2.5)

// ------MULTIPLE POINTERS - Is Subsequence------
// Takes in two strings and cheks whether the characters in the first string form
// a subsequence of the characters in the second string.
// => Should check whether the characters in the first string appear somewhere
// in the second string, without their order changing.

// Solution Iterative
function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }
    return false;
  }

// Solution Recursive but not O(1) Space
  function isSubsequence(str1, str2) {
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
    return isSubsequence(str1, str2.slice(1))
  }


// function isSubsequence(str1, str2){               ------ EXO A REFAIRE -----
//     const one = str1.sort((a,b) => a > b);
//     const two = str2.sort((a,b) => a > b);

//     let start = 0
//     let end = arr.length-1;


//     while(start < end){
//       let avg = (arr[start]+arr[end]) / 2 
//       if(avg === num) {
//           console.log('true');
//       return true;}
//       else if(avg < num) start++
//       else end--
//     }
//         console.log('false');
//     return false;
// }
// isSubsequence()


 // ------SLIDDING WINDOW - Max Subarray Sum------ ?

//  function maxSubarraySum(){

//  }


// __________________________________

// Section 8 Recursion Problem Set
//POWER SOLUTION
function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}
//FACTORIAL SOLUTION
function factorial(x){
   if (x < 0 ) return 0;
   if (x <= 1 ) return 1;
   return x * factorial(x-1);
}
//PRODUCT OF ARRAY SOLUTION
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

// RecursiveRange
function recursiveRange(x){
  if(x < 0) return 0;
      return x + recursiveRange(x -1);
}
// recursiveRange(6)

//FIBONACCI SOLUTION
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

//BINARY SEARCH
// Original Solution
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while(arr[middle] !== elem && start <= end) {
      if(elem < arr[middle]){
          end = middle - 1;
      } else {
          start = middle + 1;
      }
      middle = Math.floor((start + end) / 2);
  }
  if(arr[middle] === elem){
      return middle;
  }
  return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while(arr[middle] !== elem && start <= end) {
      if(elem < arr[middle]) end = middle - 1;
      else start = middle + 1;
      middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

// binarySearch([2,5,6,9,13,15,28,30], 103)



// Naive string search
function naiveSearch(long, short){
  var count = 0;
  for(var i = 0; i < long.length; i++){
      for(var j = 0; j < short.length; j++){
         if(short[j] !== long[i+j]) break;
         if(j === short.length - 1) count++;
      }
  }
  return count;
}

naiveSearch("lorie loled", "lol")
