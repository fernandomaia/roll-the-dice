function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var num1 = 1;
var num2 = 6;

document.getElementById('rollButton').onclick = function() {
    var result = randomInt(num1, num2);
    if(result > 3) {
        alert("I won! It was a " + result + ".");
    } else {
        alert("You won! It was a " + result + ".");
    }
}
