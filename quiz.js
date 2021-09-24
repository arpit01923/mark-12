var quizForm=document.querySelector(".quiz-form")
var btn=document.querySelector(".submit")
var output1=document.querySelector(".output")

var correctAns=["45","right angled","obtuse","acute"]

function clickHandler(){
    var score=0;
    var index=0;
    var formResult=new FormData(quizForm)
    for(var value of formResult.values())
    {
        if(value == correctAns[index]){
            score=score+1;
        }
        index=index+1;
    }
    output1.innerText="Your score should be "+score;
}

btn.addEventListener("click",clickHandler);