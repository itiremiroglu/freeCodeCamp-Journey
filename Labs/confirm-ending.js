function confirmEnding(str, target) {
  if (str.slice(-target.length) === target) {
    return true;
  } else {
    return false;
  }
}
