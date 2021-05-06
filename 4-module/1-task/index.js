function makeFriendsList(arr) {
  const friendsList = document.createElement('ul');
  const data = arr.map(({ firstName, lastName }) => `<li>${firstName} ${lastName}</li>`).join('');

  friendsList.insertAdjacentHTML('beforeEnd', data);

  return friendsList;
}
