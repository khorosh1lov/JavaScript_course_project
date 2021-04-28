function isEmpty(obj) {
  for (let prop in obj) {
    return !prop;
  }

  return true;
}
