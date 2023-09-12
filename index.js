let currentQuetionsIndex = 0;
let scoreValue = 0;
let score = document.querySelector(".score span");

const questionsCall = async function () {
  try {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple"
    );

    const loader = document.querySelector(".loader");
    const app = document.querySelector(".app");
    if (loader && response.ok) {
      loader.style.display = "none";
      app.style.display = "block";
    }

    if (!response.ok) {
      throw new Error("network response was not ok");
    }
    const data = await response.json();
    const questions = data.results;
    console.log(questions);
    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextBtn = document.getElementById("next-btn");
    const prevBtn = document.getElementById("prev-btn");
    const optionsBtn = document.querySelectorAll(".btn");

    nextBtn.style.display = "block";

    showQuestion();

    function showQuestion() {
      let currentQuetion = questions[currentQuetionsIndex];
      // console.log(currentQuetion);
      let questionNo = currentQuetionsIndex + 1;
      questionElement.innerHTML = questionNo + "." + currentQuetion.question;

      const allOptions = [
        ...currentQuetion.incorrect_answers,
        currentQuetion.correct_answer,
      ];

      for (let i = allOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allOptions[i], allOptions[j]] = [allOptions[j], allOptions[i]];
      }

      optionsBtn.forEach((option, index) => {
        option.innerHTML = allOptions[index];
        option.setAttribute("value", allOptions[index]);
        option.disabled = false;
        option.removeEventListener("click", optionHandler);

        if (
          option.classList.contains("correct_btn") ||
          option.classList.contains("incorrect")
        ) {
          option.classList.remove("correct_btn");
          option.classList.remove("incorrect");
        }

        option.addEventListener("click", optionHandler);
        function optionHandler(e) {
          if (e.target.value === currentQuetion.correct_answer) {
            e.target.classList.add("correct_btn");
            scoreValue += 5;
            score.innerHTML = scoreValue;
          }
          optionsBtn.forEach((option) => {
            if (!option.classList.contains("correct_btn")) {
              option.classList.add("incorrect");
            }
            if (option.value === currentQuetion.correct_answer) {
              option.classList.add("correct_btn");
            }
          });
        }
      });
    }

    nextBtn.addEventListener("click", () => {
      currentQuetionsIndex += 1;
      if (currentQuetionsIndex > 0) {
        prevBtn.style.display = "block";
      }
      if (currentQuetionsIndex === questions.length - 1) {
        nextBtn.style.display = "none";
      }
      showQuestion();
    });

    prevBtn.addEventListener("click", () => {
      currentQuetionsIndex -= 1;
      nextBtn.style.display = "block";
      if (currentQuetionsIndex === 0) {
        prevBtn.style.display = "none";
      }
      showQuestion();
    });
  } catch (error) {
    console.error("An error occurred", error);
  }
};

questionsCall();
