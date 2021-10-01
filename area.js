var input1=document.querySelector(".c1");
var input2=document.querySelector(".c2");
var btn=document.querySelector(".c3");
var output=document.querySelector(".c4");

function area(){
    if((input1.value <= 0)||(input2.value <= 0)){
    output.innerText="Error in input";
    }
    else{
        if((input1.value != "")&&(input2.value != "")){
            var a=input1.value;
            var b=input2.value;
            var area=1/2*a*b;
            output.innerText=area;
            }
    }
}
btn.addEventListener("click",area);