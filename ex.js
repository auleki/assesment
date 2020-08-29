const t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const tSquared = t.map(p => p * p)

const aboveHalf = tSquared.filter(p => p < 50)

// console.log(aboveHalf);