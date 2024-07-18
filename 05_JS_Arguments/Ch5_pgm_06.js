// A function with two arguments

var showSum;

showSum = function (number1, number2) {
    var total = number1 + number2;
    console.log("The sum is " + total);
};

showSum(30, 23);
showSum(2.8, -5);

showSum(56, 74);

var showProduct = function (number1, number2) {
    var product = number1 * number2;
    console.log("The product is " + product);
};

showProduct(3, 5);
showProduct(10, -4);
showProduct(1.5, 2.5);

var showDifference = function (number1, number2) {
    var difference = number1 - number2;
    console.log("The difference is " + difference);
};

var showQuotient = function (number1, number2) {
    if (number2 === 0) {
        console.log("Division by zero is not allowed.");
    } else {
        var quotient = number1 / number2;
        console.log("The quotient is " + quotient);
    }
};

showDifference(10, 4);
showDifference(20, 5.5);
showDifference(-3, -7);

showQuotient(10, 2);
showQuotient(20, 4);
showQuotient(15, 0);
