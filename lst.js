const longestCommonSubsequence = (item1, item2) => {
  const table = Array.from({ length: item1.length + 1 }, () =>
    new Array(item2.length + 1).fill("")
  );

  for (let i = 1; i < table.length; i++) {
    for (let j = 1; j < table[i].length; j++) {
      if (item1[i - 1] === item2[j - 1]) {
        table[i][j] = table[i - 1][j - 1] + item1[i - 1];
      } else {
        let above = table[i - 1][j];
        let rest = table[i][j - 1];

        table[i][j] = above.length > rest.length ? above : rest;
      }
    }
  }

  return table[table.length - 1][table[0].length - 1].length;
};

// const item1 = [1, 2, 4, 6];
// const item2 = [2, 1, 3, 5, 6];
// console.log(longestCommonSubsequence(item1, item2));
const a = "ABRACADABRA";
const b = "DABRADA";
console.log(longestCommonSubsequence(a, b));
