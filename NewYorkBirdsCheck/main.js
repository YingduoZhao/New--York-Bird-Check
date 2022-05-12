document.addEventListener("DOMContentLoaded", function(){

     //if someone selects an answer, store that answer in localstorage
     //Q1

     //grab any answers within q1//
      let q1answers = document.querySelectorAll("#Q1 input");
      for(let i = 0; i < q1answers.length; i++){
        q1answers[i].addEventListener("change", function(){
          if(q1answers[i].id == "NC2"){
            localStorage.setItem("Q1", "1");
          }else{
            localStorage.setItem("Q1", "0");
          }
        })
      }

      let q2answers = document.querySelectorAll("#Q2 input");
      for(let i = 0; i < q2answers.length; i++){
        q2answers[i].addEventListener("change", function(){
          if(q2answers[i].id == "ES3"){
            localStorage.setItem("Q2", "1");
          }else{
            localStorage.setItem("Q2", "0");
          }
        })
      }

      let q3answers = document.querySelectorAll("#Q3 input");
      for(let i = 0; i < q3answers.length; i++){
        q3answers[i].addEventListener("change", function(){
          if(q3answers[i].id == "DW4"){
            localStorage.setItem("Q3", "1");
          }else{
            localStorage.setItem("Q3", "0");
          }
        })
      }

      let q4answers = document.querySelectorAll("#Q4 input");
      for(let i = 0; i < q4answers.length; i++){
        q4answers[i].addEventListener("change", function(){
          if(q4answers[i].id == "TS5"){
            localStorage.setItem("Q4", "1");
          }else{
            localStorage.setItem("Q4", "0");
          }
        })
      }

      let q5answers = document.querySelectorAll("#Q5 input");
      for(let i = 0; i < q5answers.length; i++){
        q5answers[i].addEventListener("change", function(){
          if(q5answers[i].id == "BP6"){
            localStorage.setItem("Q5", "1");
          }else{
            localStorage.setItem("Q5", "0");
          }
        })
      }

      let q6answers = document.querySelectorAll("#Q6 input");
      for(let i = 0; i < q6answers.length; i++){
        q6answers[i].addEventListener("change", function(){
          if(q6answers[i].id == "BJ7"){
            localStorage.setItem("Q6", "1");
          }else{
            localStorage.setItem("Q6", "0");
          }
        })
      }

      let q7answers = document.querySelectorAll("#Q7 input");
      for(let i = 0; i < q7answers.length; i++){
        q7answers[i].addEventListener("change", function(){
          if(q7answers[i].id == "M8"){
            localStorage.setItem("Q7", "1");
          }else{
            localStorage.setItem("Q7", "0");
          }
        })
      }

      let q8answers = document.querySelectorAll("#Q8 input");
      for(let i = 0; i < q8answers.length; i++){
        q8answers[i].addEventListener("change", function(){
          if(q8answers[i].id == "D9"){
            localStorage.setItem("Q8", "1");
          }else{
            localStorage.setItem("Q8", "0");
          }
        })
      }

      


     //Q2
     //Q3
     //Q4
     //Q5
     //Q6
     //Q7
     //Q8




});







function setup(){
    let c = createCanvas(400,400);
    c.parent('canvas-wrapper');
  }
  
  function checkanswers(){


    if(document.getElementById('Northern_Cardinal').checked) {
      document.getElementsById("question2").innerHTML = "you are correct";

      //northern cardinal radio button is checked
    }

    
    
  }

  function draw(){
  


    

  }
  