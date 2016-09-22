function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var num1 = 1;
var num2 = 6;

document.getElementById('rollButton').onclick = function() {
    var result = randomInt(num1, num2);
    if(result > 3) {
        document.getElementById("result").style.display = "block";
        document.getElementById("result").innerHTML = "<strong>I won!</strong> It was a " + result + ".";
    } else {
        document.getElementById("result").style.display = "block";
        document.getElementById("result").innerHTML = "<strong>You won!</strong> It was a " + result + ".";
    }
}
