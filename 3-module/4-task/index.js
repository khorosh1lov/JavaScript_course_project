function showSalary(users, age) {
  const validUsers = users.filter(user => user.age <= age);
  return validUsers.map(({ name, balance }) => `${name}, ${balance}`).join('\n');
}
