// Breaking a function by changing a variable name

var msg;
var showMessage;

msg = "It's full of stars!";

showMessage = function () {
    console.log(msg);  
};

showMessage();


var message = "Hello, Universe!";


showMessage = function () {
    console.log(msg);      
    console.log(message);  
};

showMessage();


showMessage = function () {
    var combinedMessage = msg + " " + message;
    console.log(combinedMessage);
};

showMessage();
