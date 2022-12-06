const mcqsData = [
    {
        "category": "Entertainment  Video Games",
        "type": "multiple",
        "difficulty": "hard",
        "question": "What was the name of the hero in the 80s animated video game Dragons Lair ",
        "correct_answer": "Dirk the Daring",
        "incorrect_answers": [
            "Arthur",
            "Sir Toby Belch",
            "Guy of Gisbourne"
        ]
    },
    {
        "category": "Animals",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What is the scientific name for modern day humans ",
        "correct_answer": "Homo Sapiens",
        "incorrect_answers": [
            "Homo Ergaster",
            "Homo Erectus",
            "Homo Neanderthalensis"
        ]
    },
    {
        "category": "Entertainment  Books",
        "type": "multiple",
        "difficulty": "hard",
        "question": "What is Ron Weasleys middle name ",
        "correct_answer": "Bilius",
        "incorrect_answers": [
            "Arthur",
            "John",
            "Dominic"
        ]
    },
    {
        "category": "Entertainment  Comics",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Who is the creator of the comic series  The Walking Dead  ",
        "correct_answer": "Robert Kirkman",
        "incorrect_answers": [
            "Stan Lee",
            "Malcolm Wheeler-Nicholson",
            "Robert Crumb"
        ]
    },
    {
        "category": "Entertainment  Board Games",
        "type": "multiple",
        "difficulty": "medium",
        "question": "At the start of a standard game of the Monopoly  if you throw a double six  which square would you land on ",
        "correct_answer": "Electric Company",
        "incorrect_answers": [
            "Water Works",
            "Chance",
            "Community Chest"
        ]
    },
    {
        "category": "Geography",
        "type": "multiple",
        "difficulty": "easy",
        "question": "What is the capital of Jamaica ",
        "correct_answer": "Kingston",
        "incorrect_answers": [
            "Rio de Janeiro",
            "Dar es Salaam",
            "Kano"
        ]
    },
    {
        "category": "History",
        "type": "multiple",
        "difficulty": "medium",
        "question": "When did Jamaica recieve its independence from England  ",
        "correct_answer": "1962",
        "incorrect_answers": [
            "1492",
            "1963",
            "1987"
        ]
    },
    {
        "category": "Animals",
        "type": "boolean",
        "difficulty": "easy",
        "question": "Kangaroos keep food in their pouches next to their children.",
        "correct_answer": "False",
        "incorrect_answers": [
            "True",
            "both true and false",
            "None of the above"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "multiple",
        "difficulty": "medium",
        "question": "In 2013 how much money was lost by Nigerian scams ",
        "correct_answer": "12.7 Billion",
        "incorrect_answers": [
            "95 Million",
            "956 Million",
            "2.7 Billion"
        ]
    },
    {
        "category": "History",
        "type": "multiple",
        "difficulty": "medium",
        "question": "How old was Lyndon B. Johnson when he assumed the role of President of the United States ",
        "correct_answer": "55",
        "incorrect_answers": [
            "50",
            "60",
            "54"
        ]
    },
    {
        "category": "Entertainment  Video Games",
        "type": "multiple",
        "difficulty": "hard",
        "question": "In World of Warcraft lore  who organized the creation of the Paladins ",
        "correct_answer": "Alonsus Faol",
        "incorrect_answers": [
            "Uther the Lightbringer",
            "Alexandros Mograine",
            "Sargeras  The Daemon Lord"
        ]
    },
    {
        "category": "Entertainment  Video Games",
        "type": "boolean",
        "difficulty": "medium",
        "question": "In the game  Subnautica   a  Cave Crawler  will attack you.",
        "correct_answer": "True",
        "incorrect_answers": [
            "False"
        ]
    },
    {
        "category": "Entertainment  Japanese Anime  Manga",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What is the name of the device that allows for infinite energy in the anime  Dimension W  ",
        "correct_answer": "Coils",
        "incorrect_answers": [
            "Wires",
            "Collectors",
            "Tesla"
        ]
    },
    {
        "category": "Entertainment  Video Games",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What is the name of Cream the Rabbits mom in the  Sonic the Hedgehog  series ",
        "correct_answer": "Vanilla",
        "incorrect_answers": [
            "Peach",
            "Strawberry",
            "Mint"
        ]
    },
    {
        "category": "History",
        "type": "multiple",
        "difficulty": "easy",
        "question": "These two countries held a commonwealth from the 16th to 18th century.",
        "correct_answer": "Poland and Lithuania",
        "incorrect_answers": [
            "Hutu and Rwanda",
            "North Korea and South Korea",
            "Bangladesh and Bhutan"
        ]
    },
    {
        "category": "Entertainment  Television",
        "type": "multiple",
        "difficulty": "hard",
        "question": "Which of these voices wasnt a choice for the House AI in  The Simpsons Treehouse of Horror  short  House of Whacks ",
        "correct_answer": "George Clooney",
        "incorrect_answers": [
            "Matthew Perry",
            "Dennis Miller",
            "Pierce Brosnan"
        ]
    },
    {
        "category": "Entertainment  Music",
        "type": "multiple",
        "difficulty": "medium",
        "question": "From which album is the Gorillaz song   On Melancholy Hill  featured in ",
        "correct_answer": "Plastic Beach",
        "incorrect_answers": [
            "Demon Days",
            "Humanz",
            "The Fall"
        ]
    },
    {
        "category": "General Knowledge",
        "type": "boolean",
        "difficulty": "easy",
        "question": "Scotland voted to become an independent country during the referendum from September 2014.",
        "correct_answer": "False",
        "incorrect_answers": [
            "True"
        ]
    },
    {
        "category": "Entertainment  Video Games",
        "type": "multiple",
        "difficulty": "medium",
        "question": "In Left 4 Dead  which campaign has the protagonists going through a subway in order to reach a hospital for evacuation ",
        "correct_answer": "No Mercy",
        "incorrect_answers": [
            "Subway Sprint",
            "Hospital Havoc",
            "Blood Harvest"
        ]
    },
    {
        "category": "History",
        "type": "multiple",
        "difficulty": "hard",
        "question": "What was the last colony the UK ceded marking the end of the British Empire ",
        "correct_answer": "Hong Kong",
        "incorrect_answers": [
            "India",
            "Australia",
            "Ireland"
        ]
    }
]

// All Variables
let quizContainer = document.querySelector(".quiz-container")
let mcqsNumber = document.querySelector(".mcqNumber");
let questionCategory = document.querySelector(".category");
let questionNumber = document.querySelector(".question-number");
let question = document.querySelector(".question");
let ans1 = document.querySelector(".answer-1");
let ans2 = document.querySelector(".answer-2");
let ans3 = document.querySelector(".answer-3");
let ans4 = document.querySelector(".answer-4");
let progressBar = document.querySelector(".progress-bar");
let allAnswer = document.querySelectorAll(".all-answer");
let correctMessage = document.querySelector(".message");
let correctionDiv = document.querySelector(".correct");
let nextBtn = document.querySelector(".next-btn");

let progress_percent = document.querySelector(".progress-percent");
let progressPercentCount = 0;

let correctProgressBar = document.querySelector(".correct-answer-bar");
let correctProgressCount = 0;

let wrongProgressBar = document.querySelector(".wrong-answer-bar");
let wrongProgressCount = 0;

let scoreContainer = document.querySelector(".score-container");
let scoreCount = document.querySelector(".score");

let questionCount = 0;
let score = 0;
let progressBarRange = 0;
let questionNumberCount = 0;
let randomAnswerGenerator = Math.ceil(Math.random() * 4)


const renderQuestion = () => {


    // Progress bar percent shower
    progressPercentCount += (1 / mcqsData.length) * 100
    progress_percent.innerHTML = progressPercentCount;

    questionNumberCount++
    questionNumber.innerHTML = `${questionNumberCount} `

    progressBarRange += (1 / mcqsData.length) * 100;
    progressBar.style.width = progressBarRange + "%"

    mcqsNumber.innerHTML = `${questionNumberCount} `;
    questionCategory.innerHTML = mcqsData[questionCount].category;
    question.innerHTML = mcqsData[questionCount].question;
    if (randomAnswerGenerator === 1) {
        ans1.innerHTML = mcqsData[questionCount].correct_answer
        ans4.innerHTML = mcqsData[questionCount].incorrect_answers[0]
        ans3.innerHTML = mcqsData[questionCount].incorrect_answers[1]
        ans2.innerHTML = mcqsData[questionCount].incorrect_answers[2]
    }
    else if (randomAnswerGenerator === 2) {
        ans1.innerHTML = mcqsData[questionCount].incorrect_answers[2]
        ans2.innerHTML = mcqsData[questionCount].incorrect_answers[1]
        ans3.innerHTML = mcqsData[questionCount].incorrect_answers[0]
        ans4.innerHTML = mcqsData[questionCount].correct_answer
    }
    else if (randomAnswerGenerator === 3) {
        ans1.innerHTML = mcqsData[questionCount].incorrect_answers[1]
        ans2.innerHTML = mcqsData[questionCount].correct_answer
        ans3.innerHTML = mcqsData[questionCount].incorrect_answers[2]
        ans4.innerHTML = mcqsData[questionCount].incorrect_answers[0]
    }
    else if (randomAnswerGenerator === 4) {
        ans1.innerHTML = mcqsData[questionCount].incorrect_answers[0]
        ans2.innerHTML = mcqsData[questionCount].incorrect_answers[2]
        ans3.innerHTML = mcqsData[questionCount].correct_answer
        ans4.innerHTML = mcqsData[questionCount].incorrect_answers[1]
    }

}
renderQuestion()

let notRepeatQuestion = 0;
const getCheckAnswer = (a) => {
    ans1.setAttribute("disabled", "disabled");
    ans2.setAttribute("disabled", "disabled");
    ans3.setAttribute("disabled", "disabled");
    ans4.setAttribute("disabled", "disabled");

    notRepeatQuestion++
    if (notRepeatQuestion === 1) {
        correctionDiv.style.display = "block";
        nextBtn.style.display = "block";

        // Because of this keyword we have to get its innerhtml for matching the answer
        let matchedAnswer = a.innerHTML

        if (matchedAnswer === mcqsData[questionCount].correct_answer) {
            correctMessage.innerHTML = "Correct !"
            score++
            localStorage.setItem("correction", "correct")
        }
        else {
            correctMessage.innerHTML = "Sorry!"
            localStorage.setItem("correction", "sorry")

        }
    } else {
        return false
    }


}

const nextQuestion = () => {
    ans1.removeAttribute("disabled");
    ans2.removeAttribute("disabled");
    ans3.removeAttribute("disabled");
    ans4.removeAttribute("disabled");
    notRepeatQuestion = 0;
    correctionDiv.style.display = "none";
    nextBtn.style.display = "none";

    let getQuality = localStorage.getItem("correction");
    if (getQuality === "correct") {
        correctProgressCount += (1 / mcqsData.length) * 100;
        correctProgressBar.style.width = correctProgressCount + "%"
    }
    else if (getQuality === "sorry") {
        wrongProgressCount += (1 / mcqsData.length) * 100;
        wrongProgressBar.style.width = wrongProgressCount + "%"
    }


    if (questionCount < (mcqsData.length - 1)) {
        questionCount++
        renderQuestion()
        console.log(score)
        randomAnswerGenerator = Math.ceil(Math.random() * 4)
    } else {
        scoreContainer.style.display = "block";
        quizContainer.style.display = "none";
        scoreCount.innerHTML = score
    }

}