var input1 = document.querySelector(".c1");
var input2 = document.querySelector(".c2");
var input3 = document.querySelector(".c4");
var btn = document.querySelector(".c3");
var output = document.querySelector(".c5");

function angle() {
    if((input1.value <= 0) || (input2.value <= 0) || (input3.value <= 0)){
        output.innerText= "Sides are not valid";
    }
    else {
        if ((input1.value != "") && (input2.value != "") && (input3.value != ""))
     {
        var a = parseInt(input1.value);
        var b = parseInt(input2.value);
        var c = parseInt(input3.value);
        var sum = a + b + c;
        if (sum == 180) {
            output.innerText = "Form a triangle";
        }
        else {
            output.innerText = "Do not form a triangle";
        }
    }
}
}
btn.addEventListener("click", angle);