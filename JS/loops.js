//1
let start = 25;
let end = 0;
while (start >= end) {
  console.log(start);
  start--;
}
start = 25;
do {
  console.log(start);
  start--;
} while (start >= end);
console.log("-------------------");
//2
start = 10;
end = 50;
while (start <= end) {
  if (!(start % 5)) {
    console.log(start);
  }
  start++;
}
start = 10;
do {
  if (!(start % 5)) {
    console.log(start);
  }
  start++;
} while (start <= end);
console.log("---------------");
//3
start = 1;
end = 100;
let sum = 0;
while (start <= 100) {
  sum += start;
  start++;
}
console.log(sum);
start = 1;
sum = 0;
do {
  sum += start;
  start++;
} while (start <= 100);
console.log(sum);
