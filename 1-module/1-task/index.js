function factorial(n) {

  if (n <= 1) { return 1; }

  let res = n;

  for (let i = 1; i < n; i++) {
    res *= (n - i);
  }

  return res;
}
