const questions = document.querySelectorAll(".question");
console.log(questions);
questions.forEach( (question) => {
  const btn = question.querySelector(".btn");
  console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("display");
      }
    });

    question.classList.toggle("display");
  });
});