//1
const num = prompt("Enter a number: ");
Number(num) === 10 ? console.log("True") : console.log("False");
//2
const test = true;
const test2 = false;
if (test) {
  console.log("True(test1)");
} else {
  console.log("False(test1)");
}
!test2 ? console.log("true(test2)") : console.log("false(test2)");
//3
const sum = prompt("enter sum of buy :");
let discount;
let sumWithDiscount;
if (Number(sum) >= 500 && Number(sum) < 800) {
  discount = (Number(sum) * 3) / 100;
  sumWithDiscount = Number(sum) - discount;
  console.log(`3%: ${sumWithDiscount}`);
} else if (Number(sum) >= 800) {
  discount = (Number(sum) * 5) / 100;
  sumWithDiscount = Number(sum) - discount;
  console.log(`5%: ${sumWithDiscount}`);
} else {
  sumWithDiscount = Number(sum);
  console.log(`0%: ${sumWithDiscount}`);
}
