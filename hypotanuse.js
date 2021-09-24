var input1=document.querySelector(".c1");
var input2=document.querySelector(".c2");
var btn=document.querySelector(".c3");
var output=document.querySelector(".c4");

function answer(){
    if((input1.value != "")&&(input2.value != "")){
    var a=input1.value;
    var b=input2.value;
    var sum=(a*a)+(b*b);
    var c=Math.sqrt(sum);
    output.innerText=c;
}
    else{
     alert("Something went wrong. Try again")
    }
}

btn.addEventListener("click",answer);