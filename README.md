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