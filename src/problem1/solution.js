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
    
    return n + sum_to_n_a(n - 1);
};

var sum_to_n_c = function(n) {
    // your code here
    return [...new Array(5)].reduce(
        (x, y, index) => x + (index + 1),
        0
    );
};