let questions = {
    History: {
        Beginner: [
            {
                question: "Who was the first president of the USA?",
                options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"],
                correct: 0,
                explanation: "George Washington was the first president of the United States."
            },
            {
                question: "In what year did World War II end?",
                options: ["1940", "1945", "1950", "1960"],
                correct: 1,
                explanation: "World War II ended in 1945."
            },
            {
                question: "Where are the Great Pyramids of Giza located?",
                options: ["West bank of the Nile River", "East bank of the Nile River", "Sahara Desert", "Giza Plateau"],
                correct: 3,
                explanation: "The Great Pyramids of Giza are located on the Giza Plateau in Egypt."
            },
            {
                question: "Who was known as the Iron Man of India?",
                options: ["Mahatma Gandhi", "Sardar Vallabhbhai Patel", "Jawaharlal Nehru", "Subhas Chandra Bose"],
                correct: 1,
                explanation: "Sardar Vallabhbhai Patel was popularly known as the Iron Man of India."
            },
            {
                question: "Who was the first emperor of the Maurya Empire?",
                options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Harsha"],
                correct: 1,
                explanation: "Chandragupta Maurya founded the Maurya Empire."
            }
        ],

        Intermediate: [
            {
                question: "Who was the last emperor of the Western Roman Empire?",
                options: ["Julius Caesar", "Augustus", "Romulus Augustulus", "Nerva"],
                correct: 2,
                explanation: "Romulus Augustulus is traditionally regarded as the last emperor of the Western Roman Empire."
            },
            {
                question: "Who reached India by sea from Europe in 1498?",
                options: ["Christopher Columbus", "Vasco da Gama", "Marco Polo", "Ferdinand Magellan"],
                correct: 1,
                explanation: "Vasco da Gama reached Calicut, India, by sea in 1498."
            },
            {
                question: "Who built the Taj Mahal?",
                options: ["Akbar", "Shah Jahan", "Aurangzeb", "Babur"],
                correct: 1,
                explanation: "Mughal emperor Shah Jahan commissioned the Taj Mahal."
            },
            {
                question: "The Battle of Plassey was fought in which year?",
                options: ["1757", "1764", "1857", "1747"],
                correct: 0,
                explanation: "The Battle of Plassey was fought in 1757."
            },
            {
                question: "Who founded the Mughal Empire in India?",
                options: ["Akbar", "Babur", "Humayun", "Shah Jahan"],
                correct: 1,
                explanation: "Babur founded the Mughal Empire after his victory at the First Battle of Panipat in 1526."
            }
        ],

        Advanced: [
            {
                question: "Which treaty ended the First World War?",
                options: ["Treaty of Paris", "Treaty of Versailles", "Treaty of Vienna", "Treaty of Rome"],
                correct: 1,
                explanation: "The Treaty of Versailles was signed in 1919 and formally ended the state of war between Germany and the Allied Powers."
            },
            {
                question: "Who was the founder of the Gupta Empire?",
                options: ["Samudragupta", "Chandragupta I", "Chandragupta II", "Skandagupta"],
                correct: 1,
                explanation: "Chandragupta I is generally regarded as the founder of the Gupta Empire."
            },
            {
                question: "Who wrote the book 'The Discovery of India'?",
                options: ["Mahatma Gandhi", "Jawaharlal Nehru", "B. R. Ambedkar", "Sardar Patel"],
                correct: 1,
                explanation: "Jawaharlal Nehru wrote 'The Discovery of India' during his imprisonment."
            },
            {
                question: "The Industrial Revolution began first in which country?",
                options: ["France", "Germany", "Britain", "United States"],
                correct: 2,
                explanation: "The Industrial Revolution began in Great Britain in the 18th century."
            },
            {
                question: "Which ancient civilization developed along the Tigris and Euphrates rivers?",
                options: ["Egyptian", "Mesopotamian", "Roman", "Greek"],
                correct: 1,
                explanation: "The Mesopotamian civilization developed between the Tigris and Euphrates rivers."
            }
        ]
    },

    Science: {
        Beginner: [
            {
                question: "What is the chemical symbol for water?",
                options: ["H2O", "O2", "CO2", "H2"],
                correct: 0,
                explanation: "Water is composed of two hydrogen atoms and one oxygen atom (H2O)."
            },
            {
                question: "How many planets are in the solar system?",
                options: ["7", "8", "9", "10"],
                correct: 1,
                explanation: "There are 8 recognized planets in our solar system."
            },
            {
                question: "Which organ helps humans breathe?",
                options: ["Heart", "Liver", "Lungs", "Kidney"],
                correct: 2,
                explanation: "The lungs are the primary organs responsible for breathing."
            },
            {
                question: "What force pulls objects toward Earth?",
                options: ["Magnetic force", "Gravity", "Friction", "Electric force"],
                correct: 1,
                explanation: "Gravity is the force that attracts objects toward Earth."
            },
            {
                question: "Which gas do humans need to breathe?",
                options: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
                correct: 2,
                explanation: "Humans need oxygen for cellular respiration."
            }
        ],

        Intermediate: [
            {
                question: "What is the approximate speed of light in vacuum?",
                options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
                correct: 0,
                explanation: "The speed of light in vacuum is approximately 300,000 km/s."
            },
            {
                question: "What element does 'O' represent?",
                options: ["Oxygen", "Osmium", "Ozone", "Oganesson"],
                correct: 0,
                explanation: "The chemical symbol O represents oxygen."
            },
            {
                question: "What is the powerhouse of the cell?",
                options: ["Nucleus", "Ribosome", "Mitochondria", "Cell wall"],
                correct: 2,
                explanation: "Mitochondria produce most of the cell's usable energy."
            },
            {
                question: "What is the pH of pure water at room temperature?",
                options: ["5", "6", "7", "9"],
                correct: 2,
                explanation: "Pure water has a pH of approximately 7, making it neutral."
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Mercury"],
                correct: 1,
                explanation: "Mars is called the Red Planet because of iron oxide on its surface."
            }
        ],

        Advanced: [
            {
                question: "What is the largest desert in the world?",
                options: ["Sahara", "Antarctica", "Thar", "Arabian"],
                correct: 1,
                explanation: "Antarctica is the largest desert on Earth when polar deserts are included."
            },
            {
                question: "Which planet rotates clockwise when viewed from above its north pole?",
                options: ["Earth", "Mercury", "Mars", "Venus"],
                correct: 3,
                explanation: "Venus rotates in the opposite direction to most planets, which is called retrograde rotation."
            },
            {
                question: "On which continent are bees naturally absent?",
                options: ["Antarctica", "Australia", "Asia", "Europe"],
                correct: 0,
                explanation: "Antarctica has no naturally occurring bee populations because of its extreme climate."
            },
            {
                question: "What is the Mpemba effect?",
                options: [
                    "Hot water can freeze faster than cold water under certain conditions",
                    "Cold water always freezes faster",
                    "Water evaporates instantly",
                    "Ice melts faster in darkness"
                ],
                correct: 0,
                explanation: "The Mpemba effect describes situations where hot water can freeze faster than cooler water."
            },
            {
                question: "What was the name of the first artificial satellite launched in 1957?",
                options: ["Apollo 11", "Sputnik 1", "Mangalyaan", "Chandrayaan"],
                correct: 1,
                explanation: "Sputnik 1 was the first artificial satellite, launched by the Soviet Union in 1957."
            }
        ]
    },

    Literature: {
        Beginner: [
            {
                question: "Who wrote 'Romeo and Juliet'?",
                options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
                correct: 0,
                explanation: "William Shakespeare wrote the famous tragedy 'Romeo and Juliet'."
            },
            {
                question: "Who wrote 'The Jungle Book'?",
                options: ["Rudyard Kipling", "J. K. Rowling", "R. K. Narayan", "George Orwell"],
                correct: 0,
                explanation: "Rudyard Kipling wrote 'The Jungle Book'."
            },
            {
                question: "Who wrote 'Harry Potter'?",
                options: ["J. K. Rowling", "Agatha Christie", "Jane Austen", "Virginia Woolf"],
                correct: 0,
                explanation: "J. K. Rowling wrote the Harry Potter series."
            },
            {
                question: "Who wrote 'Pride and Prejudice'?",
                options: ["Jane Austen", "Emily Brontë", "George Eliot", "Mary Shelley"],
                correct: 0,
                explanation: "Jane Austen wrote 'Pride and Prejudice'."
            },
            {
                question: "What is a poem?",
                options: [
                    "A form of literary expression using rhythm and language",
                    "A mathematical equation",
                    "A scientific experiment",
                    "A historical building"
                ],
                correct: 0,
                explanation: "A poem is a form of literature that uses language, rhythm, imagery and other literary devices."
            }
        ],

        Intermediate: [
            {
                question: "Who wrote 'Oliver Twist'?",
                options: ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Ernest Hemingway"],
                correct: 0,
                explanation: "Charles Dickens wrote the novel 'Oliver Twist'."
            },
            {
                question: "Who wrote 'The Adventures of Tom Sawyer'?",
                options: ["Mark Twain", "Robert Frost", "Oscar Wilde", "George Orwell"],
                correct: 0,
                explanation: "Mark Twain wrote 'The Adventures of Tom Sawyer'."
            },
            {
                question: "Who wrote 'The Great Gatsby'?",
                options: ["F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck", "William Faulkner"],
                correct: 0,
                explanation: "F. Scott Fitzgerald wrote 'The Great Gatsby'."
            },
            {
                question: "Who wrote the novel '1984'?",
                options: ["George Orwell", "Aldous Huxley", "Charles Dickens", "J. R. R. Tolkien"],
                correct: 0,
                explanation: "George Orwell wrote the dystopian novel '1984'."
            },
            {
                question: "What is a metaphor?",
                options: [
                    "A direct comparison without using 'like' or 'as'",
                    "A question with no answer",
                    "A type of poem",
                    "A historical document"
                ],
                correct: 0,
                explanation: "A metaphor directly compares two different things without using 'like' or 'as'."
            }
        ],

        Advanced: [
            {
                question: "Who wrote 'One Hundred Years of Solitude'?",
                options: ["Gabriel García Márquez", "Pablo Neruda", "Jorge Luis Borges", "Mario Vargas Llosa"],
                correct: 0,
                explanation: "Gabriel García Márquez wrote 'One Hundred Years of Solitude'."
            },
            {
                question: "Who wrote 'Ulysses'?",
                options: ["James Joyce", "Samuel Beckett", "Oscar Wilde", "George Bernard Shaw"],
                correct: 0,
                explanation: "James Joyce wrote the modernist novel 'Ulysses'."
            },
            {
                question: "Who wrote 'Paradise Lost'?",
                options: ["John Milton", "William Wordsworth", "John Keats", "Geoffrey Chaucer"],
                correct: 0,
                explanation: "John Milton wrote the epic poem 'Paradise Lost'."
            },
            {
                question: "What literary device gives human qualities to non-human things?",
                options: ["Personification", "Hyperbole", "Irony", "Alliteration"],
                correct: 0,
                explanation: "Personification gives human characteristics or qualities to non-human things."
            },
            {
                question: "Who wrote 'The Waste Land'?",
                options: ["T. S. Eliot", "W. B. Yeats", "Robert Frost", "Ezra Pound"],
                correct: 0,
                explanation: "T. S. Eliot wrote the influential modernist poem 'The Waste Land'."
            }
        ]
    },

    Mathematics: {
        Beginner: [
            {
                question: "What is 5 + 7?",
                options: ["10", "11", "12", "13"],
                correct: 2,
                explanation: "5 + 7 = 12."
            },
            {
                question: "What is 9 × 6?",
                options: ["45", "54", "56", "63"],
                correct: 1,
                explanation: "9 × 6 = 54."
            },
            {
                question: "What is the square of 10?",
                options: ["10", "20", "100", "1000"],
                correct: 2,
                explanation: "10 × 10 = 100."
            },
            {
                question: "How many sides does a triangle have?",
                options: ["2", "3", "4", "5"],
                correct: 1,
                explanation: "A triangle has three sides."
            },
            {
                question: "What is half of 50?",
                options: ["20", "25", "30", "35"],
                correct: 1,
                explanation: "Half of 50 is 25."
            }
        ],

        Intermediate: [
            {
                question: "What is the value of 12²?",
                options: ["124", "144", "154", "164"],
                correct: 1,
                explanation: "12² = 12 × 12 = 144."
            },
            {
                question: "What is the perimeter of a square with side 5 cm?",
                options: ["10 cm", "15 cm", "20 cm", "25 cm"],
                correct: 2,
                explanation: "Perimeter of a square = 4 × side = 4 × 5 = 20 cm."
            },
            {
                question: "What is 25% of 200?",
                options: ["25", "40", "50", "75"],
                correct: 2,
                explanation: "25% of 200 = 0.25 × 200 = 50."
            },
            {
                question: "What is the average of 10, 20 and 30?",
                options: ["15", "20", "25", "30"],
                correct: 1,
                explanation: "Average = (10 + 20 + 30) / 3 = 20."
            },
            {
                question: "If x + 5 = 12, what is x?",
                options: ["5", "6", "7", "8"],
                correct: 2,
                explanation: "Subtracting 5 from both sides gives x = 7."
            }
        ],

        Advanced: [
            {
                question: "What is the derivative of x²?",
                options: ["x", "2x", "x²", "2"],
                correct: 1,
                explanation: "Using the power rule, the derivative of x² is 2x."
            },
            {
                question: "What is the value of sin 90°?",
                options: ["0", "1", "-1", "0.5"],
                correct: 1,
                explanation: "The value of sin 90° is 1."
            },
            {
                question: "What is the probability of getting a head when a fair coin is tossed once?",
                options: ["0", "1/4", "1/2", "1"],
                correct: 2,
                explanation: "A fair coin has two equally likely outcomes, so the probability of heads is 1/2."
            },
            {
                question: "What is the value of log₁₀(100)?",
                options: ["1", "2", "10", "100"],
                correct: 1,
                explanation: "Since 10² = 100, log₁₀(100) = 2."
            },
            {
                question: "If the roots of x² - 5x + 6 = 0 are x₁ and x₂, what is x₁ + x₂?",
                options: ["3", "5", "6", "11"],
                correct: 1,
                explanation: "For ax² + bx + c = 0, the sum of roots is -b/a. Therefore, the sum is 5."
            }
        ]
    }
};

let selectedField = '';
let selectedLevel = '';
let currentQuestions = [];
let userAnswers = [];
let score = 0;
let userName = '';

// Start Quiz after entering the name
function startQuizSelection() {
  userName = document.getElementById('userName').value;
  if (!userName) {
      alert("Please enter your name!");
      return;
  }

  document.querySelector('.name-input-section').style.display = 'none';
  document.querySelector('.quiz-selection').style.display = 'block';
}

// Start quiz with selected field and difficulty
function startQuiz() {
  selectedField = document.getElementById('field').value;
  selectedLevel = document.getElementById('difficulty').value;
  currentQuestions = questions[selectedField][selectedLevel];
  userAnswers = [];
  score = 0;

  document.querySelector('.quiz-selection').style.display = 'none';
  document.getElementById('quizContainer').style.display = 'block';

  displayQuestion(0);
}

// Display each question
function displayQuestion(index) {
  if (index < currentQuestions.length) {
      const question = currentQuestions[index];
      let optionsHtml = question.options.map((option, i) =>
          `<label><input type="radio" name="question${index}" value="${i}"> ${option}</label><br>`).join('');

      document.getElementById('questionContainer').innerHTML = `
          <h3>Q${index + 1}: ${question.question}</h3>
          ${optionsHtml}
          <button onclick="nextQuestion(${index})">Next</button>
      `;
  } else {
      showResult();
  }
}

// Move to the next question
function nextQuestion(index) {
  const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
  if (selectedOption) {
      userAnswers.push(parseInt(selectedOption.value));
      score += (userAnswers[userAnswers.length - 1] === currentQuestions[index].correct) ? 1 : 0;
      displayQuestion(index + 1);
  } else {
      alert("Please select an option!");
  }
}

// Show the result after quiz completion
function showResult() {
  document.getElementById('quizContainer').style.display = 'none';
  document.getElementById('result').style.display = 'block';

  let resultText = `${userName}.<br> You scored ${score} out of ${currentQuestions.length}.<br>`;
  resultText += `<b>Field:</b> ${selectedField}<br><b>Difficulty Level:</b> ${selectedLevel}<br><br>`;
  
  currentQuestions.forEach((question, index) => {
      resultText += `<p><b>Question ${index + 1}:</b> ${question.explanation}</p>`;
  });

  document.getElementById('score').innerHTML = resultText;
}

function restartQuiz() {
    // Show category selection
    document.querySelector('.quiz-selection').style.display = 'block';

    // Hide other sections
    document.getElementById('result').style.display = 'none';
    document.getElementById('certificate').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'none';

    // Clear old questions
    document.getElementById('questionContainer').innerHTML = '';

    // Reset quiz data
    currentQuestions = [];
    userAnswers = [];
    score = 0;
}
// Logout and allow another person to play
function logout() {

    // Hide all quiz-related sections
    document.querySelector('.quiz-selection').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById('certificate').style.display = 'none';

    // Show login/name section
    document.querySelector('.name-input-section').style.display = 'block';

    // Clear name input
    document.getElementById('userName').value = '';

    // Clear quiz questions
    document.getElementById('questionContainer').innerHTML = '';

    // Clear result
    document.getElementById('score').innerHTML = '';

    // Reset quiz variables
    selectedField = '';
    selectedLevel = '';
    currentQuestions = [];
    userAnswers = [];
    score = 0;
    userName = '';
}

// Generate certificate with user details
function generateCertificate() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Show certificate on webpage
document.getElementById('nameDisplay').textContent = userName;
document.getElementById('completionStatement').textContent = `has demonstrated exceptional performance and successfully completed the quiz.`;
document.getElementById('dateDisplay').textContent = `Date: ${new Date().toLocaleDateString()}`;
document.getElementById('certificate').style.display = 'block';

  // Load the background image as the source (Ensure it's accessible)
  const imagePath = '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';  // Path to the image
  
  // Add the image to the PDF as the background (ensure it fills the page)
  doc.addImage(imagePath, 'PNG',0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height);
  
  // Title: "Quiz Master"
  doc.setFont('Brush Script MT', 'bold');
  doc.setFontSize(40);
  doc.setTextColor(229, 46, 113); // Pinkish Red color
  doc.text('Quiz Master', 105, 60, null, null, 'center');

  // Title
  //doc.setFont("Arial", "bold");
  /*doc.setFontSize(24);
  doc.text("Certificate of Completion", 105, 30, null, null, "center");

  // Name
  doc.setFontSize(18);
  doc.text(`This certifies that ${userName}`, 105, 60, null, null, "center");

  // Quiz Information
  doc.text(`Successfully completed the ${selectedField} quiz at ${selectedLevel} level.`, 105, 90, null, null, "center");
  doc.text(`Your Score: ${score} out of ${currentQuestions.length}`, 105, 120, null, null, "center");

  // Save PDF
  doc.save(`${userName}_certificate.pdf`);*/
  // Subtitle: "Certificate of Completion"
doc.setFont('Brush Script MT', 'bold');
doc.setFontSize(38);
doc.text('Certificate of Completion', 105, 85, null, null, 'center');

// Statement: "This has to certify that"
doc.setFont('helvetica', 'normal');
doc.setFontSize(20);
doc.setTextColor(50, 50, 50); // Dark Gray
doc.text('This has to certify that', 105, 110, null, null, 'center');

// Name
doc.setFont('helvetica', 'bold');
doc.setFontSize(30);
doc.text(` ${userName}`, 105, 130, null, null, "center");

// Quiz Information
//doc.text(`Successfully completed the ${selectedField} quiz at ${selectedLevel} level.`, 105, 150, null, null, "center");
//doc.text(`Your Score: ${score} out of ${currentQuestions.length}`, 105, 155, null, null, "center");

// Name of the user
//doc.setFont('helvetica', 'bold');
//doc.setFontSize(30);
//doc.text(name, 105, 130, null, null, 'center');

// Statement: "has demonstrated exceptional performance..."
doc.setFont('helvetica', 'italic');
doc.setFontSize(18);
const statement = 'has demonstrated exceptional performance and successfully completed the quiz.';
const statementLines = doc.splitTextToSize(statement, 170);  // Fit text within 170 width
doc.text(statementLines, 105, 150, null, null, 'center');

// Statement: "Congratulations on completing the quiz!..."
doc.setFont('helvetica', 'italic');
doc.setFontSize(18);
const statement1 = 'Congratulations on completing the quiz! Your effort and determination are truly impressive. You have demonstrated great focus and perseverance, showcasing your knowledge and skills. Keep up the excellent work—this achievement reflects your commitment to learning and growth!';
const statementLines2 = doc.splitTextToSize(statement1, 170);  // Fit text within 170 width
doc.text(statementLines2, 105, 170, null, null, 'center');

// Quiz Information
doc.text(`Feild: ${selectedField}.`, 105, 220, null, null, "center");
doc.text(`Level: ${selectedLevel}.`, 105, 230, null, null, "center");
doc.text(`Your Score: ${score} out of ${currentQuestions.length}`, 105, 240, null, null, "center");

// Date Section (left side)
doc.setFont('helvetica', 'normal');
doc.setFontSize(14);
doc.setTextColor(136, 136, 136); // Light gray
doc.text(`Date: ${new Date().toLocaleDateString()}`, 30, 270);

// Signature Section (right side)
//doc.line(180, 270, 250, 270); // Horizontal line for signature
//doc.text('Signature', 210, 290);

// Enhanced Stylish Border with gradient and shadow effects
doc.setDrawColor(255, 138, 0); // Outer border color (orange)
doc.setLineWidth(3);  // Thicker border for outer
doc.roundedRect(10, 10, doc.internal.pageSize.width - 20, doc.internal.pageSize.height - 20, 20, 20); // Outer rounded border

// Save PDF
doc.save(`${userName}_certificate.pdf`);
}