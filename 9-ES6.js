const demethodize = 
  fn =>
    (x, y) =>
      fn.call(x, y);
