let unit = Number(prompt("Enter the number of units consumed:"));
let billAmount;

if (unit <= 100) {
    billAmount = unit * 5;
} else if (unit <= 200) {
    billAmount = (100 * 5) + ((unit - 100) * 7);
} else {
    billAmount = (100 * 5) + (100 * 7) + ((unit - 200) * 10);
}
console.log(`The electricity bill for ${unit} units is: Rs. ${billAmount}`);