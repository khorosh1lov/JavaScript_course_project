function truncate(str, maxlength) {
  const TAIL = '…';

  if (str.length > maxlength) {
    str = str.slice(0, maxlength - 1) + TAIL;
    return str;
  }

  return str;
}
