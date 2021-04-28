function sumSalary(salaries) {
  let res = 0;

  for (let val in salaries) {
    if (typeof (salaries[val]) === 'number' && !isNaN(salaries[val]) && isFinite(salaries[val])) {
      res += salaries[val];
    }
  }

  return res;
}
