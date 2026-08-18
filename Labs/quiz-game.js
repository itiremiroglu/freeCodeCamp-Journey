const questions = [{ category: "Chemistry", question: "What is the chemical symbol for water?", choices: ["H2O", "CO2", "NaCl"], answer: "H2O" }, { category: "Mathematics", question: "What is 2+2?", choices: ["3", "4", "5"], answer: "4" }, { category: "Geography", question: "What is the capital of France?", choices: ["Paris", "Madrid", "Berlin"], answer: "Paris" }, { category: "Technology", question: "Which programming language is used for web development?", choices: ["Python", "JavaScript", "C++"], answer: "JavaScript" }, { category: "General", question: "How many days are in a standard year?", choices: ["365", "300", "400"], answer: "365" }];

function getRandomQuestion(questionsArray) {
    const randomIndex = Math.floor(Math.random() * questionsArray.length);
    return questionsArray[randomIndex];
}

function getRandomComputerChoice(choicesArray) {
    const randomIndex = Math.floor(Math.random() * choicesArray.length);
    return choicesArray[randomIndex];
}

function getResults(questionObj, computerChoice) {
    if (computerChoice === questionObj.answer) {
        return "The computer's choice is correct!";
    }
    else {
        return `The computer's choice is wrong. The correct answer is ${questionObj.answer}`;
    }
}