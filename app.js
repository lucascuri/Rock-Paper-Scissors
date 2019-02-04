let [userScore, compScore] = [0, 0];
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const result_p = document.querySelector('.resultP');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');

const getCompChoice = () => {
    const roll = ['r', 'p', 's'];
    const random = Math.floor(Math.random() * 3);
    return roll[random];
}

const result = (docResult, docScore, docScoreWinner, winner, m1, m2) => {
    docResult.innerHTML = `${winner} wins! ${m1} covers ${m2}.`;
    if (winner === 'User') {
        docScore.innerHTML = `${docScoreWinner}:`;
    } else {
        docScore.innerHTML = `${docScoreWinner}`;
    }
}

const game = (userChoice) => {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "rs":
        userScore++;
        result(result_p, userScore_span, userScore, 'User', 'Rock', 'Scissor');
        break;

        case "pr":
        userScore++;
        result(result_p, userScore_span, userScore, 'User', 'Paper', 'Rock');
        break;

        case "sp":
        userScore++;
        result(result_p, userScore_span, userScore, 'User', 'Scissor', 'Paper');
        break;

        case "rp":
        compScore++;
        result(result_p, compScore_span, compScore, 'Comp', 'Paper', 'Rock');
        break;

        case "ps":
        compScore++;
        result(result_p, compScore_span, compScore, 'Comp', 'Scissor', 'Paper');
        break;

        case "sr":
        compScore++;
        result(result_p, compScore_span, compScore, 'Comp', 'Rock', 'Scissor');
        break;

        case "rr":
        case "pp":
        case "ss":
        userScore++; compScore++;
        result_p.innerHTML = `It's a draw!`;
        userScore_span.innerHTML = `${userScore}:`;
        compScore_span.innerHTML = `${compScore}`; 
        break;
    }
}

const main = () => {
    rock_div.addEventListener('click', () => {
        game('r');
    });
    
    paper_div.addEventListener('click', () => {
        game('p');
    });
    
    scissor_div.addEventListener('click', () => {
        game('s');
    });
}

main();



