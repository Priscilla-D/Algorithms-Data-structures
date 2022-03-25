// Add function until (and including) the number * WAY 1 *

function addUpTo(n){
    let total=0;
    for (let i=1; i<=n; i++){     // ! -> O(n)
        total +=i;
    }
    return total;
}

const test = addUpTo(2);

console.log(test);

// Add function until (and including) the number * WAY 2 *

function addUpToTwo(n){
    return n * (n+1) / 2;         // ! -> O(1)
}

const testTwo = addUpToTwo(2);

console.log(testTwo);

//--------------------------------------------------------------------

// Check the time to execute the two ways
const performance = require('perf_hooks').performance;

var t1 = performance.now();
// addUpTo(1000000000);
addUpToTwo(1000000000)
var t2 = performance.now();
console.log(`Time Elapsed= ${(t2 - t1) / 1000 } seconds.`)

//-------------------------------------------------------------------

// Example for O(n2)

function prinAllPairs(n){
    for(var i = 0; i < n; i++){
        for (var j = 0; j < n; j++) {     // ! -> O(n2)
            console.log(i, j)
        }
    }
}
