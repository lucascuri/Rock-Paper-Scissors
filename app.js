const [userScore, compScore] = [0, 0];
const userScoreDOC = document.getElementById('user-score');
const compScoreDOC = document.getElementById('comp-score');
const [numRock, numPaper, numScissor] = [1, 2, 3];

const randomNumber = (min = 1, max = 3) => {
    const num = Math.floor((Math.random() * 3) + 1);
    console.log(num);
}

const roll = (rock = 1, paper = 2, scisssor = 3) => {
    
}

$('.choice').on('click', function() {
    randomNumber();
});

