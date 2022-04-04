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

## ANNALYZING PERFORMANCE OF ARRAYS AND OBJECTS

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

"Write a function which takes two nimbers and returns their sum."

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

```function charCount(str) {
    //do something

    //return an object with keys that are lowercase alphanumeric characters in the string, values should be
    the counts for those characters

}```

step 2:

```function charCount(str) {
    //make object to return at end

    //loop over string, for each character
        //if the character is a letter/number AND is a key in object, add one to count
        //if the character is a letter/number AND not in object, add it to object and set value to 1
        //if character is something else (space, period, etc...) don't do anything

    //return object at end

}```

### SOLVE OR SIMPLIFY

If you can't, solve a simpler problem.

        -> Simplify :
            - Find the core difficulty in what you're trying to do
            - Temporarily ignore thaht difficulty
            - Write a simplified solution
            - Then incorporate that difficulty back in

EXAMPLE: 

```function charCount(str) {
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

}```

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

```
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
    ```

    We can improve this code again by using for of loop.

    ```
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
    ```

    Improve the if :

    ```
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
    ```

    By not using a regExp:


```
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
    ```

## PROBLEM SOLVING PATTERNS

*** Devise a plan for solving problems ***
*** Master common problem solving patterns ***

Some patterns :

- Frequency counter
- Multiple pointers
- Sliding Window
- Divide and Conquer
- Dynamic Programming
- Greedy Algorithms
- Backtracking
- etc...

### Frequency counter

When you want to compare pieces of data (2 or more, to avoid O(n2))

Here we wanna check if the square number is present in the second array.

````
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
```
naive solution:

```
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
```

same refactored:

````
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
```