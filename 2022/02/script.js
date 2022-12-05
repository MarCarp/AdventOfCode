const roughData = document.querySelector('pre').innerHTML;
let step = 0;
let opponent = '';
let self = '';
let manche = 0;
let finalScore = 0;

function match(opponent, self) {
    console.log("Manche " + manche);
    if (self === 'X') {
        console.log("Joueur gagne 1 points car il a fait pierre");
        finalScore += 1;
        switch (opponent) {
            case 'A':
                finalScore += 3;
            break;
            case 'B':
                finalScore += 0;
            break;
            case 'C':
                finalScore += 6;
            break;
        }
    } else if (self === 'Y') {
        console.log("Joueur gagne 2 points car il a fait papier");
        finalScore += 2;
        switch (opponent) {
            case 'A':
                finalScore += 6;
            break;
            case 'B':
                finalScore += 3;
            break;
            case 'C':
                finalScore += 0;
            break;
        }
    } else {
        console.log("Joueur gagne 3 points car il a fait ciseau");
        finalScore += 3;
        switch (opponent) {
            case 'A':
                finalScore += 0;
            break;
            case 'B':
                finalScore += 6;
            break;
            case 'C':
                finalScore += 3;
            break;
        }
    }
    console.log("Le score est de " + finalScore);
}

function trickedMatch(opponent, self) {
    console.log("Manche " + manche);
    if (self === 'X') {
        finalScore += 0;
        switch(opponent) {
            case 'A':
                finalScore += 3;
            break;
            case 'B':
                finalScore += 1;
            break;
            case 'C':
                finalScore += 2;
            break;
        }
    } else if (self === 'Y') {
        finalScore += 3;
        switch(opponent) {
            case 'A':
                finalScore += 1;
            break;
            case 'B':
                finalScore += 2;
            break;
            case 'C':
                finalScore += 3;
            break;
        }
    } else {
        finalScore += 6;
        switch(opponent) {
            case 'A':
                finalScore += 2;
            break;
            case 'B':
                finalScore += 3;
            break;
            case 'C':
                finalScore += 1;
            break;
        }
    }
    console.log("Le score est de " + finalScore);
}

for (const elem of roughData) {
    console.log(elem + " step " + step);
    switch (step){
        case 0:
            opponent=elem;
        break;
        case 2:
            self = elem;
        break;
        case 4:
            manche++;            
            trickedMatch(opponent, self);
            opponent='';
            self='';
        break;
    }
    step++;
    if (step === 5) {step=0;};
}

console.log(finalScore);