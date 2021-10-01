var input1=document.querySelector(".c1");
var input2=document.querySelector(".c2");
var btn=document.querySelector(".c3");
var output=document.querySelector(".c4");

function answer(){
    if((input1.value <= 0)||(input2.value <= 0)){
        output.innerText="There is an error in input";
}
    else{
        if((input1.value != "")&&(input2.value != "")){
            var a=input1.value;
            var b=input2.value;
            var sum=(a*a)+(b*b);
            var c=parseInt(Math.sqrt(sum));
            output.innerText=c;
        }
    }
}

btn.addEventListener("click",answer);