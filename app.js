let [userScore, compScore] = [0, 0];
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');

const getCompChoice = () => {
    const roll = ['r', 'p', 's'];
    const random = Math.floor(Math.random() * 3);
    return roll[random];
}

const result_div = () {

}

const game = (userChoice) => {
    // console.log(`User: ${userChoice}, Computer: ${getCompChoice()}`);
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        // user wins
        case "rs":
        case "pr":
        case "sp":
        userScore++;
        console.log(`USER WINS!`);
        // console.log(`User score: ${userScore}, Computer score: ${compScore}`);
        userScore_span.innerHTML = `${userScore}:`;
        break;
        // comp wins
        case "rp":
        case "ps":
        case "sr":
        compScore++;
        console.log(`COMPUTER WINS!`);
        // console.log(`User score: ${userScore}, Computer score: ${compScore}`);
        compScore_span.innerHTML = `${compScore}`;
        break;
        // draw
        case "rr":
        case "pp":
        case "ss":
        userScore++; compScore++;
        console.log(`Its a draw!`);
        // console.log(`User score: ${userScore}, Computer score: ${compScore}`);
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



