function makeFriendsList(arr) {
  const friendsList = document.createElement('ul');
  const data = arr.map(({ firstName, lastName }) => `<li>${firstName} ${lastName}</li>`);

  for (let i = 0; i < data.length; i++) {
    // friendsList.innerHTML += data[i];
    // OR
    friendsList.insertAdjacentHTML('beforeEnd', data[i]);
  }

  return friendsList;
}
