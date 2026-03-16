// Вопросы для теста
const testQuestions = [
  {
    id: 1,
    question: "Кто является автором романа 'Война и мир'?",
    options: [
      "Александр Пушкин",
      "Лев Толстой",
      "Фёдор Достоевский",
      "Иван Тургенев"
    ],
    correctAnswer: 1,
    note: "Роман-эпопея 1869 года"
  },
  {
    id: 2,
    question: "Кто написал 'Преступление и наказание'?",
    options: [
      "Лев Толстой",
      "Антон Чехов",
      "Фёдор Достоевский",
      "Николай Гоголь"
    ],
    correctAnswer: 2,
    note: "Психологический роман 1866 года"
  },
  {
    id: 3,
    question: "Автор романа 'Мастер и Маргарита'?",
    options: [
      "Михаил Булгаков",
      "Александр Солженицын",
      "Борис Пастернак",
      "Владимир Набоков"
    ],
    correctAnswer: 0,
    note: "Мистический роман 1967 года"
  },
  {
    id: 4,
    question: "Кто создал 'Евгения Онегина'?",
    options: [
      "Михаил Лермонтов",
      "Александр Пушкин",
      "Николай Некрасов",
      "Иван Крылов"
    ],
    correctAnswer: 1,
    note: "Роман в стихах 1833 года"
  },
  {
    id: 5,
    question: "Кто автор 'Тихого Дона'?",
    options: [
      "Михаил Шолохов",
      "Лев Толстой",
      "Иван Бунин",
      "Максим Горький"
    ],
    correctAnswer: 0,
    note: "Эпопея о донском казачестве"
  },
  {
    id: 6,
    question: "Кто написал 'Обломова'?",
    options: [
      "Иван Гончаров",
      "Александр Островский",
      "Николай Лесков",
      "Антон Чехов"
    ],
    correctAnswer: 0,
    note: "Роман 1859 года"
  },
  {
    id: 7,
    question: "Автор 'Героя нашего времени'?",
    options: [
      "Михаил Лермонтов",
      "Александр Пушкин",
      "Николай Гоголь",
      "Иван Тургенев"
    ],
    correctAnswer: 0,
    note: "Первый психологический роман в русской литературе"
  },
  {
    id: 8,
    question: "Кто создал 'Собачье сердце'?",
    options: [
      "Михаил Булгаков",
      "Евгений Замятин",
      "Андрей Платонов",
      "Исаак Бабель"
    ],
    correctAnswer: 0,
    note: "Сатирическая повесть 1925 года"
  }
];

// Переменные для управления тестом
let currentAnswers = {};

// Инициализация теста при загрузке
document.addEventListener('DOMContentLoaded', () => {
  displayQuestions();
  updateProgress();
});

// Отображение вопросов
function displayQuestions() {
  const container = document.getElementById('questionsContainer');
  container.innerHTML = '';
  
  testQuestions.forEach((question, index) => {
    const questionHTML = `
      <div class="question" id="question${question.id}">
        <div class="question-text">
          <span class="badge bg-warning">${index + 1}</span>
          ${question.question}
        </div>
        <div class="options">
          ${question.options.map((option, optionIndex) => `
            <div class="option" onclick="selectOption(${question.id}, ${optionIndex})">
              <input type="radio" 
                     name="q${question.id}" 
                     value="${optionIndex}" 
                     id="q${question.id}a${optionIndex}"
                     ${currentAnswers[question.id] === optionIndex ? 'checked' : ''}>
              <label for="q${question.id}a${optionIndex}">${option}</label>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    container.innerHTML += questionHTML;
    
    // Восстанавливаем выбранные ответы
    if (currentAnswers[question.id] !== undefined) {
      const selectedOption = document.querySelector(`input[name="q${question.id}"][value="${currentAnswers[question.id]}"]`);
      if (selectedOption) {
        selectedOption.checked = true;
        selectedOption.closest('.option').classList.add('selected');
      }
    }
  });
}

// Выбор варианта ответа
function selectOption(questionId, optionIndex) {
  // Снимаем выделение со всех вариантов этого вопроса
  const questionElement = document.getElementById(`question${questionId}`);
  const allOptions = questionElement.querySelectorAll('.option');
  allOptions.forEach(opt => {
    opt.classList.remove('selected');
  });
  
  // Выделяем выбранный вариант
  const selectedOption = document.querySelector(`input[name="q${questionId}"][value="${optionIndex}"]`);
  selectedOption.checked = true;
  selectedOption.closest('.option').classList.add('selected');
  
  // Сохраняем ответ
  currentAnswers[questionId] = optionIndex;
  
  // Обновляем прогресс
  updateProgress();
}

// Обновление прогресса
function updateProgress() {
  const answeredCount = Object.keys(currentAnswers).length;
  const totalQuestions = testQuestions.length;
  const progressPercentage = (answeredCount / totalQuestions) * 100;
  
  document.getElementById('progressBar').style.width = `${progressPercentage}%`;
  document.getElementById('progressText').textContent = `${answeredCount} из ${totalQuestions}`;
  
  // Меняем цвет прогресс-бара в зависимости от прогресса
  const progressBar = document.getElementById('progressBar');
  if (progressPercentage < 50) {
    progressBar.className = 'progress-bar bg-warning';
  } else if (progressPercentage < 100) {
    progressBar.className = 'progress-bar bg-info';
  } else {
    progressBar.className = 'progress-bar bg-success';
  }
}

// Проверка ответов
function checkAnswers() {
  const answeredCount = Object.keys(currentAnswers).length;
  const totalQuestions = testQuestions.length;
  ym(106858210,'reachGoal','check_answers_click')
  
  // Проверяем, отвечены ли все вопросы
  if (answeredCount < totalQuestions) {
    alert(`Пожалуйста, ответьте на все вопросы!\nОтвечено: ${answeredCount} из ${totalQuestions}`);
    return;
  }
  
  let score = 0;
  const answersList = document.getElementById('answersList');
  answersList.innerHTML = '';
  
  // Сбрасываем стили
  resetAnswerStyles();
  
  // Проверяем каждый вопрос
  testQuestions.forEach(question => {
    const questionElement = document.getElementById(`question${question.id}`);
    const options = questionElement.querySelectorAll('.option');
    const userAnswer = currentAnswers[question.id];
    
    // Подсвечиваем правильный и неправильный ответы
    options.forEach(option => {
      const optionIndex = parseInt(option.querySelector('input').value);
      
      if (optionIndex === question.correctAnswer) {
        option.classList.add('correct');
      } else if (optionIndex === userAnswer && optionIndex !== question.correctAnswer) {
        option.classList.add('incorrect');
      }
    });
    
    // Считаем баллы
    if (userAnswer === question.correctAnswer) {
      score++;
    }
    
    // Добавляем в список правильных ответов
    const answerItem = document.createElement('div');
    answerItem.className = 'answer-item';
    answerItem.innerHTML = `
      <div class="answer-question">${question.question}</div>
      <div class="answer-correct">Правильный ответ: ${question.options[question.correctAnswer]}</div>
      <div class="answer-note">${question.note}</div>
    `;
    answersList.appendChild(answerItem);
  });
  
  // Показываем результаты
  showResults(score);
}

// Показ результатов
function showResults(score) {
  document.getElementById('scoreNumber').textContent = score;
  
  const scoreMessage = document.getElementById('scoreMessage');
  const totalQuestions = testQuestions.length;
  
  if (score === totalQuestions) {
    scoreMessage.textContent = ' Отлично! Вы настоящий знаток литературы!';
    scoreMessage.style.color = '#198754';
  } else if (score >= totalQuestions * 0.7) {
    scoreMessage.textContent = ' Хороший результат! Вы хорошо знаете литературу.';
    scoreMessage.style.color = '#d67a28';
  } else if (score >= totalQuestions * 0.5) {
    scoreMessage.textContent = ' Неплохо, но есть куда стремиться.';
    scoreMessage.style.color = '#6c757d';
  } else {
    scoreMessage.textContent = 'Продолжайте изучать литературу!';
    scoreMessage.style.color = '#dc3545';
  }
  
  // Показываем блок с результатами
  document.getElementById('results').classList.add('show');
  
  // Прокручиваем к результатам
  document.getElementById('results').scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  });
}

// Сброс теста
function resetTest() {
  // Сбрасываем ответы
  currentAnswers = {};
  
  // Сбрасываем радио-кнопки и стили
  const allInputs = document.querySelectorAll('input[type="radio"]');
  allInputs.forEach(input => {
    input.checked = false;
  });
  
  const allOptions = document.querySelectorAll('.option');
  allOptions.forEach(option => {
    option.classList.remove('selected', 'correct', 'incorrect');
  });
  
  // Скрываем результаты
  document.getElementById('results').classList.remove('show');
  
  // Обновляем прогресс
  updateProgress();
  
  // Прокручиваем к началу
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Сброс стилей ответов
function resetAnswerStyles() {
  const allOptions = document.querySelectorAll('.option');
  allOptions.forEach(option => {
    option.classList.remove('correct', 'incorrect');
  });
}
