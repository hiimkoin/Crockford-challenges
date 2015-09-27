/*
 * Write a function that allows another function
 * to be only called once
**/

const once =
  fn => 
    (...args) => {
      const func = fn;
      fn = null;
      return func.apply(this, args);
    }
