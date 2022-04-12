// fibonacci series using dynamic programming in js
// 40th number of fibonacci series

const dp = [];
for (let i = 0; i <= 100; i++) {
  dp.push(-1);
}
function fibonacciSeries(num) {
  if (num < 2) {
    return 1;
  } else if (dp[num] != -1) {
    return dp[num];
  } else {
    dp[num] = fibonacciSeries(num - 1) + fibonacciSeries(num - 2);
    return dp[num];
  }
}

const fiboSeries = 40;
console.log(fibonacciSeries(fiboSeries));
