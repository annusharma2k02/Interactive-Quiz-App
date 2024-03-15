document.addEventListener('DOMContentLoaded', (event) => {
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const nextButton = document.getElementById('next-button');
  let currentQuestionIndex = 0;

  const questions = [
      {
          question: "What is the capital of France?",
          options: ["New York", "London", "Paris", "Dubai"],
          answer: "Paris"
      },
      // More questions...
  ];
  
  function loadQuestion(questionIndex) {
      const question = questions[questionIndex];
      questionElement.textContent = question.question;
      optionsElement.innerHTML = '';
      question.options.forEach(option => {
          const button = document.createElement('button');
          button.textContent = option;
          button.classList.add('btn', 'btn-option');
          button.onclick = () => selectOption(option);
          optionsElement.appendChild(button);
      });
  }
