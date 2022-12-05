const roughData = document.querySelector('pre').innerHTML;
let total = [];
let comp = [];
let counter = 0;
let elements = [];

const alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

for(const elem of roughData) {
    if(elem.charCodeAt(0) !== 10 && elem.charCodeAt(0) !== 32) {
        comp.push(elem);
    } else if (elem.charCodeAt(0) === 10) {
        total.push(comp);
        comp = [];
    }
}

const spliTotal = total.map(function(x) {
    const half = x.length /2;
    const firstHalf = x.slice(0, half);
    const secondHalf = x.slice(half);
    return [firstHalf, secondHalf];
});

for (const i of spliTotal) {
    const mixedElement = i[0].find(function(backpack, index, fullArr){
        for (const j of i[1]) {
            if(backpack === j) {
                return backpack;
            }
        }
    });    
    elements.push(mixedElement);
}

const elementsValues = elements.map(function(el) {
    const founded =  alph.findIndex(function (letter, letNum) {
        if (el === letter) {
            return letNum + 1;
        }
    });
    return(founded + 1);
})

const sumWithInitial = elementsValues.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0 );

//BADGES

const teamsTotal = [];
let team = [];
let turn = 0;

for (elem of total) {
    team.push(elem);
    turn++;
    if(turn===3){
        teamsTotal.push(team);
        team = [];
        turn = 0;
    }
}

const teamBadgeValue = [];

teamsTotal.forEach(function(element){
    const commonFirst = [];
    for (const i of element[0]) {
        for (const j of element[1]) {
            if (i === j) {
                commonFirst.push(i);
            }
        }
    }
    const commonBadgde = commonFirst.find(function(elBadge){
        for (lastCommon of element[2]) {
            if (elBadge === lastCommon) {
                return elBadge;
            }
        }
    });

    valueBadge = alph.findIndex(function (letter, letNum) {
        if (commonBadgde === letter) {
            return letNum + 1;
        }
    });

    teamBadgeValue.push(valueBadge + 1);
})

const teamBadgeTotal = teamBadgeValue.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0 );

console.log(teamBadgeTotal);