const quiz = [
    {
        question: "What is the most used programming language in 2021?",
        ans1text: "Java",
        ans2text: "C",
        ans3text: "Python",
        ans4text: "JavaScript",
        answer: "JavaScript",
    },
    {
        question: "Who is the President of US?",
        ans1text: "Joe Biden",
        ans2text: "Donald Trump",
        ans3text: "Barack Obama",
        ans4text: "George Bush",
        answer: "Joe Biden",
    },{
        question: "What does HTML stand for?",
        ans1text: "Hypertext Markup Language",
        ans2text: "Cascading Style Sheet",
        ans3text: "Jason Object Notation",
        ans4text: "Helicopters Terminals Motorboats Lamborginis",
        answer: "Hypertext Markup Language",
    },
    {
        question: "What year was JavaScript launched?",
        ans1text: "1996",
        ans2text: "1995",
        ans3text: "1994",
        ans4text: "none of the above",
        answer: "1995",

    }
]

currentQuestion = 0

let question = document.getElementById("quize-question")
let firstQuestion = quiz[currentQuestion].question;


// console.log(question)



let option_a = document.getElementById("text-option-a")
let option_b = document.getElementById("text-option-b")
let option_c = document.getElementById("text-option-c")
let option_d = document.getElementById("text-option-d")


option_a.innerHTML = quiz[currentQuestion].ans1text;
option_b.innerHTML = quiz[currentQuestion].ans2text;
option_c.innerHTML = quiz[currentQuestion].ans3text;
option_d.innerHTML = quiz[currentQuestion].ans4text;




let submit = document.querySelector("#submit")


let score = 0;

submit.addEventListener("click", () => {

    let checkedAns = document.querySelector('input[type="radio"]:checked')
    console.log(checkedAns)
    if(checkedAns === null){
        alert("Please Select an answer")
    }else{
        if(checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer){
            score++;
        }

        console.log(score)
       
        currentQuestion++;
        if(currentQuestion < quiz.length){
            question.textContent = quiz[currentQuestion].question;
            option_a.innerHTML = quiz[currentQuestion].ans1text;
            option_b.innerHTML = quiz[currentQuestion].ans2text;
            option_c.innerHTML = quiz[currentQuestion].ans3text;
            option_d.innerHTML = quiz[currentQuestion].ans4text;
            checkedAns.checked = false;
        }else{
            alert("Your score is " + score + " out of " + quiz.length);
            location.reload();
        }

    }
    

   
    });
