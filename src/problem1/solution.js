var sum_to_n_a = function(n) {
    // your code here
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
};

var sum_to_n_b = function(n) {
    // your code here
    if (n === 0) {
        return n;
    }
    
    return n + sum_to_n_b(n - 1);
};

var sum_to_n_c = function(n) {
    // your code here

    return n * (n + 1) / 2;
};

console.log("Method 1:", sum_to_n_a(1000))
console.log("Method 2:", sum_to_n_b(1000))
console.log("Method 3:", sum_to_n_c(1000))