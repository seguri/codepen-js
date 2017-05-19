require('./codepen.min.js');

"Hello %@ %@".fmt('John', 'Doe') === "Hello John Doe";
"Hello %@2, %@1".fmt('John', 'Doe') === "Hello Doe, John";
"Hello %@, %@".fmt(-Infinity) === "Hello -Infinity, ";
