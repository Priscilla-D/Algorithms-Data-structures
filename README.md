# Algorithms-Data-structures

## BIG O NOTATION
To analyze the performance of an algorithm.

### BIG O TIME (for runtime)

#### Big O notation

Better code:
- faster
- less memory-intensive
- more readable

#### Big O definition

- f(n) could be linear (f(n) = n)
- f(n) could be quadratic (f(n) = n2)
- f(n) could be constant (f(n) = 1)
- f(n) could be something different

#### Big O shorthands

1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the complexity is the length of the loop times (trad. -> fois) the complexity of whaterver happens inside of the loop




### BIG O SPACE

#### Rules

- Most primitives (booleans, numbers, undifined, null) are constant space
- Strings reuire O(n) space (where n is the string length)
- Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)


#### Logarithm

Log :
log2 (value) = exponent -> 2exponent = value

The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.

ex: 8/2 = 4/2 = 2/2 = 1   -> log(8) = 3

## ANALYZING PERFORMANCE OF ARRAYS AND OBJECTS

Objects:

When you don't need order
When you need fast access/insertion

-> Unordered : key value pairs

When you don't need any ordering, objects are an excellent choice.

Insertion - O(1)
Removal - O(1))
Searching - O(N)
Access - O(1)

Big O of object Methods :

Object.keys - O(N)
Object.values - O(N)
Object.entries - O(N)
hasOwnProperty - O(1)

Arrays:

When you need order
When you need fast access/insertion and removal (sort of...)

-> Ordered lists


Insertion - It depends (on where it's inserting) :
To add an element at the end of the array we use .push() -> O(1)
To add an element at the begining of the array we need to reindex all the elements in the array -> O(n)


Removal - It depends :
To remove an element at the end of the array -> O(1)
To remove an element at the begining of the array we need to reindex all the elements in the array -> O(n)

Searching - O(N)
Access - O(1)



## PROBLEM SOLVING APPROACH

What is an Algorithm ?
Process or set of steps to accomplish a certain task.

How do you improve ?
-> Devise a plan for solving
-> Master common problem solving patterns

Problem solving :
1. Understand the problem
2. Explore concrete examples
3. Break it down
4. Solve/Simplify
5. Look back and refactor

### UNDERSTAND THE PROBLEM

-> Can I restate the problem in my own words ?
-> What are the inputs that go into the problem ?
-> What are the outputs that should come from the solution to (solve) the problem ?
-> Can the outputs be determined from the inputs ?
Do I have enough information to solve the problem ?
(You may not be able to answer this question until 
you set about solving the problem. That's okay, it's still worth considering the question at this early stage.)
-> How should I label the important pieces of data that are a part of the problem?

EXAMPLE:

"Write a function which takes two numbers and returns their sum."

-> Can I restate the problem in my own words ?
Addition a list of number

-> What are the inputs that go into the problem ?
ints? floats? string for large numbers?

-> What are the outputs that should come from the solution to (solve) the problem ?
ints? floats? string for large numbers?

### EXPLORE EXAMPLES

Coming up with examples can help you understand the problem better.
Examples also provide sanity checks that your eventual solution works how it should.

(user stories and unit tests too)

Start with simple example, the easiest to begin
Then progress to more complex examples
Explore examples with empty inputs, then with invalid inputs

EXAMPLE:

"Write a function which takes in a string and returns counts of each character in the string."

-> Do we count upper + lower case for the same character ?
-> What do we do if the character is a number ?
etc...

### BREAK IT DOWN

-> Explicity write out the steps you need to take.

This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and to worry about details (e.g. language syntax) as well.

EXAMPLE: 

"Write a function which takes in a string and returns counts of each character in the string."

step 1:

`function charCount(str) {
    //do something

    //return an object with keys that are lowercase alphanumeric characters in the string, values should be
    the counts for those characters

}`

step 2:

`function charCount(str) {
    //make object to return at end

    //loop over string, for each character
        //if the character is a letter/number AND is a key in object, add one to count
        //if the character is a letter/number AND not in object, add it to object and set value to 1
        //if character is something else (space, period, etc...) don't do anything

    //return object at end

}`

### SOLVE OR SIMPLIFY

If you can't, solve a simpler problem.

        -> Simplify :
            - Find the core difficulty in what you're trying to do
            - Temporarily ignore thaht difficulty
            - Write a simplified solution
            - Then incorporate that difficulty back in

EXAMPLE: 

`function charCount(str) {
    //make object to return at end
var result = {};

    //loop over string, for each character
for(var i=0; i<str.length; i++){
    var char = str[i].toLowerCase();

            //if the character is a letter/number AND is a key in object, add one to count
    if(result[char] > 0){
        result[char]++;
    }
            //if the character is a letter/number AND not in object, add it to object and set value to 1
    else {
        result[char] = 1;
    };
}

        //if character is something else (space, period, etc...) don't do anything

    //return object at end
    return result;

}`

### LOOK BACK AND REFACTOR

-> Refactoring questions
    - Can you check the result?
    - Can you derive the result differently? (different approaches)
    - Can you understand it at a glance?
    - Can you use the result or method for some other problem?
    - Can you improve the performance of your solution?
    - Can you think of other ways to refactor?
    - How have other people solved this problem?

    EXAMPLE: 

`
    function charCount(str) {
        var obj = {};
        for (var i = 0; i <str.length; i++){
            var char = str[i].toLowerCase();
            if (/[a-z0-9]/.test(char)){
                if (obj[char] > 0){
                    obj[char]++;
                } else {
                    obj[char] = 1;
                };
            }
        }
        return obj;
    }
    `

    We can improve this code again by using for of loop.

    `
    function charCount(str) {
        var obj = {};
        for (var char of str){
            char = char.toLowerCase();
            if (/[a-z0-9]/.test(char)){
                if (obj[char] > 0){
                    obj[char]++;
                } else {
                    obj[char] = 1;
                };
            }
        }
        return obj;
    }
    `

    Improve the if :

    `
    function charCount(str) {
        var obj = {};
        for (var char of str){
            char = char.toLowerCase();
            if (/[a-z0-9]/.test(char)){
                obj[char] = ++obj[char] || 1;   -> it's truthy the char is added, else the count is set to one
            }
        }
        return obj;
    }
    `

    By not using a regExp:


`
    function charCount(str) {
        var obj = {};
        for (var char of str){
            char = char.toLowerCase();
            if (isAlphaNumeric(char)){
                obj[char] = ++obj[char] || 1;
            }
        }
        return obj;
    }

    function isAlphaNumeric(char){
        var code = char.charCodeAt(0);
        if(!code > 47 && code < 58) && // numeric (0-9)
        !code > 64 && code < 91) && // upper alpha (A-Z)
        !code > 96 && code < 123) && // upper alpha (a-z)
        { return false;
        }
        return true;
    }
    `

## PROBLEM SOLVING PATTERNS

** Devise a plan for solving problems **
** Master common problem solving patterns **

Some patterns :

- Frequency counter
- Multiple pointers
- Sliding Window
- Divide and Conquer
- Dynamic Programming
- Greedy Algorithms
- Backtracking
- etc...

### Frequency counter Pattern

When you want to compare pieces of data (2 or more, to avoid O(n2))

Here we wanna check if the square number is present in the second array.

`
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for (let i = 0; i< arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2) // quel est l'index de 1 squared 2 dans le tableau 2
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1)
    }
    return true;
}
`
naive solution:

`
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex,1)
    }
    return true;
}

same([1,2,3,2], [9,1,4,4])
`

same refactored:

`
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

same([1,2,3,2,5], [9,1,4,4,11])
`

### Multiple Pointers Pattern

In an ordered array we want to find the first pair of number wich return 0.


The naive solution loops nasted
`
function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}

sumZero([-4,-3,-2,-1,0,1,2,5])
`
but we want to avoid the time complexity.
Time complexity -> O(n^2)
Time complexity -> O(1)

The solution :
`
function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
let sum = arr[left] + arr[right];
if(sum === 0){
    return [arr[left]], arr[right]];
} else if(sum > 0){
    right--;
} else {
    left ++;
}
    }
}
`
Time complexity -> O(n)
Time complexity -> O(1)

### Sliding Window Pattern

This pattern involves creating a window which can either be an array or number from one position to another.
Depending on a certain condition, the window either increases or closes (and a new window is created).
Very useful for keeping track of a subset of data in an array/string etc...

Exercice:

Write a function called maxSubarraySum wich accepts an array of integers and a numbercalled n. The function should calculate the maximum sum of n consecutive elements in the array.

Naive solution:

Time complexity O(n^2)

`
function maxSubarraySum(arr, num) {
  if ( num > arr.length){
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i ++){
    temp = 0;
    for (let j = 0; j < num; j++){
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)`

Refactor solution :
`
function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)`

Time complexity O(n)

### Divide and Conquer Pattern

This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
This pattern can tremendousky decrease time complexity.

Exercice:
Given a sorted array of integers, write a function called search, that accepts a value and returns the index wher the value passed to the function is located.
If the value is not found, return -1.

Linear search solution => naive solution
`
function search(arr, val){
    for(let i= 0; i < arr.length; i++){
if(arr[i] === val){
    return i;
}
    }
    return -1;
}
`

Time complexity O(n)

Binary search solution => refactor solution
`
function search(arr, val){

    let min = 0;
    let max = array.length -1;


   while(min <= max){
       let middle = Math.floor((min +max) /2);
       let currentElement = array[middle];

if(array[middle] < val){
    min = middle +1;
} else if (array[middle] > val{
max = middle -1;
} else {
    return middle;
}
    
    return -1;
}
`

Time complexity Log(n)

## RECURSION
(dragon story)

Solution can be made iterativly or recursivly.

-> Do it over and over on a smaller piece.

Recursion :
A process (a function our case) that calls itself (not another function).

Usually functions being pushed on tha call stack and popped off when they are done,
with recursives function we keep pushing new functions onto the call stack.

Call Stack : a function is put on top of the stack list when invoked, the function is removed from the list when something is returned. (Call stack is visible in the devtools into the browser.)


*How recursive functions work = invoke the same function with a different input until you reach your base case.
Base case is the condition when the recursion ends.*

Recursive function needs :
- base case
- different input

Resume =
Function which call itself (recursive call), which needs one condition to stop and a different input each time and then return something.

Ex of Recursive function :
function sumRange(num){
  if(num === 1) return 1;            => case base
  return num + sumRange(num-1);      => different input
}

Recursive function most used is factorial B, ex :

Factorial NON RECURSIVELY :
function factorial(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i
    }
    return total;
}
factorial(4);

RECURSIVELY factorial :
function factorial(num){
  if(num === 1) return 1;
  return num * factorial(num-1);
}

Common Recursion Pitfalls
(ex of error message : "Maximum call stack size is exceeded", this is a stack overflow)
- No base case or bad base case
- Forgetting to return or returning the wrong thing


Helper Method Recursion : (fonction non autonome)
function outer(input){
    var outerScopedVariable = []
function helper(helperInput){
    //modify the outerScopedVariable
    helper(helperInput--)
}
helper(input)
return outerScopedVariable;
}

Pure recursion: (fonction autonome)
function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1,2,3,4,5])

Pure recursion tips :
- For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them.
- Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings.
- To make copies of objects use Object.assign, or the spread operator.


## SEARCHING ALGORITHMS

Linear search : Loop (big O : O(n))
Used for unsorted elements.

Binary search :
Used on sorted arrays.
Much faster form of search, rather than eliminating one element at a time, you can eliminat half of the remaining elements at a time.



PSEUDOCODE :

-> Lopp over the long string
-> Loop over the short string
-> If the characters don't match, break out oh the inner loop
-> If the characters do match, keep going
-> If you complete the inner loop and find a match, increment the count of matches
-> Return the count

-----------

# SORTING
Sorting is fundamental.
Bubble sort, selection sort, and insertion sort are all roughtly equivalent.
All have average time complexities that are quadratic.
We can do better, but we need more complex algorithms.

SORTING BY COMPARAISON**********

### Bubble Sort
Sorting is the process of rearranging the items in a collection (ex : an array) so that the items are in somekind of order.

Ex :
- Sorting numbers from smallest to largest
- Sorting names alphabetically
- Sorting movies based on release year
- Sorting movies based on revenue

https://www.toptal.com/developers/sorting-algorithms



SORT METHOD in JS : (sorted by Unicodes strings by default)
For string, the sort method sort alphabetically.

- The built-in method accepts an optional comparator function.
- You can use this comparator function to tell Javascript how you want it to sort.
- The comparator looks at pairs of elements (a and b), determines their sort order based on the return value.


For an ascending sort numbers :
Ex :
function numberCompare(num1, num2){
    return num1 - num2;  -> for descending order put : num2 - num1
}
[6, 4, 15, 10].sort(numberCompare);
output -> [4, 6, 10, 15]

For sorting by length of string :
function compareByLen(str1, str2){
    return str1.length - str2.length;
}   
["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen);


### BUBBLE SORT:
(Many comparaison and swap each time)
A sorting algorithm where the largest values bubble up to the top (is swaped at the end).

PseudoCode :
- Start looping from the end of the array towards the beginning with a variable called i.
- Start an inner loop with a variable called j from the beginning until i )1.
- If arr[j] is greater than arr[j+1], swap those two values !
- Return the sorted array.

// UNOPTIMIZED VERSION OF BUBBLE SORT
function bubbleSort(arr){
  for(var i = arr.length; i > 0; i--){
    for(var j = 0; j < i - 1; j++){
      console.log(arr, arr[j], arr[j+1]);
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;         
      }
    }
  }
  return arr;
}

// ES2015 Version
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);

// Optimized BubbleSort with noSwaps
function bubbleSort(arr){
  var noSwaps;
  for(var i = arr.length; i > 0; i--){
    noSwaps = true;
    for(var j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;         
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);

### SELECTION SORT:
(Many comparaison but one swap at the end of the loop)
Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position.

PseudoCode :
- Store the first element as the smallest value you've seen so far.
- Compare this item to the next item in the array until you find a smaller number.
- If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
- If the "miminum" is not the value (index) you initially began with, swap the two values.
- Repeat this with the next element until the array is sorted.


// LEGACY VERSION (non ES2015 syntax)
function sselectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        var lowest = i;
        for(var j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            //SWAP!
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

// ES2015 VERSION
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

selectionSort([0,2,34,22,10,19,17]);

### INSERTION SORT:
Builds up the sort by gradually creating a larger left half which is always sorted.

PseudoCode :
- Start by picking the second element in the array.
- Now compare the second element with the one before it and swap if necessary.
- Continue to the next element and if it is incorrect order, iterate through the sorted portion (ex: the left side) to place the element in the correct place.
- Repeat until the array is sorted.

function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

insertionSort([2,1,9,76,4])


## FASTER SORTS
There is a family of sorting algorithms that can improve time complexity from O(n2) to O(n log n).
There's a tradeoff between efficiency and simplicity.
The more efficient algorithms are much less simple, and generally take longer to understand.
The sorting algorithms we've learned so far don't scale well.
Try out bubble sort on an array of 100000 elements, it will take quite some time!
We need to be able to sort large arrays more quickly.

### MERGE SORT

MERGING ARRAYS
In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays.
Given two arrays which are sorted, this helper function should create a new array which is also sorted, and constits of all of the elements in the two input arrays.
This function shloud run in O(n+m) time and O(n+m) space and should not modify the parameters passed to it.

PseudoCode :
(You'll need 2 loops)
- Create an empty array, take a look at tje smallest values in each input array.
- While there are still values we haven't looked at :
                - If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array.
                - If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array.
                - Once we exhaust one array, push in all remaining values from the other array.

// Merges two already sorted arrays
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}
merge([100,200], [1,2,3,5,6])



MERGE SORT

PseudoCode :
- Break up the array into halves until you have arays that are empty or have one element. (with a midpoint for example)
- Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array.
- Once the array has been merged back together, return the merged (and sorted) array.

// Merge function from earlier
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

// Recrusive Merge Sort
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid)); -> à chaque tour le tableau est divisé en tableau plus petit
    let right = mergeSort(arr.slice(mid));  -> à chaque tour le tableau est divisé en tableau plus petit
    return merge(left, right);
}

mergeSort([10,24,76,73])

https://www.bigocheatsheet.com/


### QUICK SORT
Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted.
Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array.
Once the pivot is positionned appropriately, quick sort can be applied on either side of the pivot.

Pivot Helper :
- In order to implement merge sort, it's useful to first implement a function responsible arranging elements in an array on either side of a pivot.
- Given an array, this helper function should designate an element as the pivot.
- It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivit are moved to the right of the pivot.
- The order of elements on either side of the pivot doesn't matter.
- The helper should do this in place, that is, it should not create a new array.
- When complete, the helper should return the index of the pivot.


Picking a pivot :
- The runtime of quick sort depends in part on how one selects the pivot.
- Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting.
- For simplicity, we'll always choose the pivot to be the first element (we'll talk about consequences of this later).
Pivot PseudoCode :
It will help to accept three arguments : an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
Grab the pivot from the start of the array (for simplicity)
Store the current pivot index in a varibale (this will keep track of where the pivot should end up).
Loop throught the array from the start until the end.
        * If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index.
Swap the starting element (ex : the pivot) with the pivot index.
Return the pivot index.

// First Version
function pivot(arr, start=0, end=arr.length+1){
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for(var i = start + 1; i < arr.length; i++){
    if(pivot > arr[i]){
      swapIdx++;
      swap(arr,swapIdx,i);
    }
  }
  swap(arr,start,swapIdx);
  return swapIdx;
}

// Version with ES2015 Syntax
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

pivot([4,8,2,1,5,7,6,3])



Quicksort PseudoCode :
- Call the pivot helper on the array.
- When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index.
- Your base case occurs when you consider a subarray with less than 2 elements.


function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}


function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right) //3
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
      }
     return arr;
} 
           
quickSort([100,-3,2,4,6,9,1,2,5,3,23])

// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1



SORTING NOT BY COMPARAISON**********

### RADIX SORT
Radix sort is a special sorting algorithm that works on lists of numbers.
It never makes comparisons between elements!
It exploits the fact that information about the size of a number is encoded in the number of digits.
More digits means a bigger number!


function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

mostDigits([23,567,89,12234324,90])

Helper Methods:
In order to implement radix sort, it's helpful to build a few helper functions first:
    getDigits(num, place) - returns the digit in num at the given place value


function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

mostDigits([23,567,89,12234324,90])

PseudoCode:
- Define a function that accepts list of numbers
- Figure out how many digits the largest number has
- Loop from k = 0 up to this largest number of digits
- For each iteration of the loop :
    - Create buckets (here an empty array) for each digit (0 to 9)
    - Place each number in the corresponding bucket based on its kth digit.
- Replace our existing array with values in our buckets, starting with 0 and going up to 9.
- Return list at the end.

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

radixSort([23,345,5467,12,2345,9852])



 

## DATA STRUCTURES

WHAT DO THEY DO?
Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data

WHY SO MANY?
Different data structures excel at different things.  Some are highly specialized, while others (like arrays) are more generally used.

### Class
A class is a blueprint for creating objects with pre-defined properties and methods.
Classes are blueprints that when creatd make objects know as instances.
Classes are created with the new keyword, the constructor function is a special function that gets run when the class is instantiated.
Instance methods can be added to classes similar to methods in objects.
Class methods can be added using the static keyword.

Syntax:
`
class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
    }
}

let firstStudent = new Student("Colt", "Steele",1);
let secondStudent = new Student("Blue", "Steele",2);
`
The method to create new objects must be called constructor.
The class keyword creates a constant, so you can not redefine it.
Watch out for the syntax as well.

Defining a class is just a pattern.
`this` reference to the individual instance of the class.


INSTANCE METHODS***

class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate(){
        this.tardies += 1;
        if(this.tardies >= 3) {
            return "YOU ARE EXPELLED!!!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score){
        this.scores.push(score);
        return this.scores
    }
    calculateAverage(){
        let sum = this.scores.reduce(function(a,b){return a+b;})
        return sum/this.scores.length;
    }  
}

let firstStudent = new Student("Colt", "Steele",1);
let secondStudent = new Student("Blue", "Steele",2);


CLASS METHODS***
Static method : defines a static method for a class, they are called without instantiating their class and cannot be called through a class instance.
They are often used to create utility functions for an application.
(Not related to a particular instance, related to the class -> so accessible by the name of the class, not the name of the instance).

class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate(){
        this.tardies += 1;
        if(this.tardies >= 3) {
            return "YOU ARE EXPELLED!!!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score){
        this.scores.push(score);
        return this.scores
    }
    calculateAverage(){
        let sum = this.scores.reduce(function(a,b){return a+b;})
        return sum/this.scores.length;
    }
    static EnrollStudents(){
        return "ENROLLING STUDENTS!"
    }
    
}

let firstStudent = new Student("Colt", "Steele",1);
let secondStudent = new Student("Blue", "Steele",2);




class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2)); // 7.0710678118654755

---------
classDataStructure(){
    constructor(){
        //what default properties should it have?
    }
    someInstanceMethod(){
        //what should each object created from this class be able to do?
    }
}

Inside all of our instance methods and constructor, the keyword `this` refers to the object created from that class (also known as an instance).
---------

### Singly Linked List
Is a data structure, store whatever you want.
Lists:
Do not have indexes.
Connected via nodes with a next pointer.
Random access is not allowed.

Comparaison with arrays:
Indexed in order.
Insertion and deletion can be expensive.
Can quickly be accessed at a specific index.

Big O is very good for insertion and deletion because there is no reindex each time.

// piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop{
        if(!this.head)return undefined;
        var current = this.tail;
        while(current) {
            current = current.next;
            this.temp = null;
            this.tail = pre.temp;
this.length --;
        }
        
    }
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")

Pushing PseudoCode:
This function should accept a value.
Create a new node using the value passed to the function.
If there is no head property on the list, set the head and tail to be the newly created node.
Otherwise set the next property on the tail to be the new node and set the tail property on the list to be newly created node.
Increment the length by one.
Return the linked list.




