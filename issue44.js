function repeatStr (n, s) {
    let stringSum = s;
    for (let i = 1; i < n; i++) stringSum=stringSum+s;
    return stringSum;
  }

  или

  repeatStr = (n, s) => s.repeat(n)