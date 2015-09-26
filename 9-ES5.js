function demethodize(fn) {
  return function(x, y) {
    return fn.call(x, y);
  };
}
