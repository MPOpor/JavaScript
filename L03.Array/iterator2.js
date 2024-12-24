let str = "Hello";

// does the same as

// for (let char of str) console.log(char);

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();

  if (result.done) break;

  T;

  console.log(result.value); // outputs characters one by one
}
