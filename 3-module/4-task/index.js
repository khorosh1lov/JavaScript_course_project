function showSalary(users, age) {
  const validUsers = users.filter(user => user.age <= age);
  return validUsers.map(user => `${user.name}, ${user.balance}`).join('\n');
}
