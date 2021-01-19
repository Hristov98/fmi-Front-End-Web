function getMaxLessThanK(n, k) {
    var max = -1;
    
    for (let i = 1; i <= n; i++) {
        for (let j = i + 1; j <= n; j++) {
            var bitwise = i & j;
            if (bitwise > max && bitwise < k) {
                max = i & j;
            }
        }
    }

    return max;
}
