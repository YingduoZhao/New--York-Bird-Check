document.addEventListener("DOMContentLoaded", function(){


    let q1score = parseInt(localStorage.getItem("Q1")) || 0;
    let q2score = parseInt(localStorage.getItem("Q2")) || 0;
    let q3score = parseInt(localStorage.getItem("Q3")) || 0;
    let q4score = parseInt(localStorage.getItem("Q4")) || 0;
    let q5score = parseInt(localStorage.getItem("Q5")) || 0;
    let q6score = parseInt(localStorage.getItem("Q6")) || 0;
    let q7score = parseInt(localStorage.getItem("Q7")) || 0;
    let q8score = parseInt(localStorage.getItem("Q8")) || 0;
    let finalscore = q1score +q2score +q3score +q4score +q5score +q6score +q7score +q8score;
    document.querySelector("#score").innerHTML = finalscore;

})