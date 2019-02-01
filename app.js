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

// rock(1) > scissor(3), rock(1) < paper(2), rock(1) = rock(1)
// paper(2) > rock(1), paper(2) < scissor(3), paper(2) = paper(2)
// scissor(3) > paper(2), scissor(3) < rock(1), scissor(3) = scissor(3)

let pedra, papel, tesoura;
const moves = {
    poss1: !(pedra > tesoura),
    poss2: !!(pedra > papel),
    poss3: !(pedra = pedra),
    poss4: !(papel > pedra),
    poss5: !!(papel > tesoura),
    poss6: !(papel = papel),
    poss7: !(tesoura > paper),
    poss8: !!(tesoura > pedra),
    poss9: !(tesoura = tesoura)
}

console.log(moves)



$('#rock').on('click', () => {
    randomNumber();
});

$('#paper').on('click', () => {
    randomNumber();
});

$('#scissor').on('click', () => {
    randomNumber();
});

