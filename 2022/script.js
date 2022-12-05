const roughData = document.querySelector('pre').innerHTML;
const dock = [];
let actualLine = 0;
let emptyCounter = 0;
let maxStack = 8;
let i = 0;

function switchLine() {
    if (actualLine > 7) {
        actualLine = 0;
    } else {
        actualLine++;
    }
}

while(maxStack > 0) {
    if (!(dock[actualLine] instanceof Array)) {
        dock[actualLine] = [];
    }

    if (roughData[i].charCodeAt(0) === 32) {
        emptyCounter++
        if (emptyCounter > 3) {
            switchLine();
            emptyCounter = 0;
        }
    } else if (roughData[i].charCodeAt(0) === 10) {
        emptyCounter = 0;
        actualLine = 0;
        maxStack--;
    } else if (roughData[i].charCodeAt(0) !== 93 && roughData[i].charCodeAt(0) !== 91 ) {
        dock[actualLine].unshift(roughData[i]);
    } else if (roughData[i].charCodeAt(0) === 93) {
        switchLine();
        emptyCounter = 0;
    }
    i++;
}

const secondPart = roughData.slice(i + 39);
arraySecond = secondPart.split('\n');

const instruction = [];

for (elem in arraySecond) {
    instruction.push(arraySecond[elem].split(' '));
}

console.log(instruction);

/*for (operation of instruction) {
    const fromDock = parseInt(operation[4]) - 1;
    const toDock = parseInt(operation[6]) - 1;
    const loops = operation[2];
    for (let i = loops ; i > 0 ; i--) {
        let popped = dock[parseInt(fromDock)].pop();
        dock[parseInt(toDock)].push(popped);
    }
}*/

for (operation of instruction) {
    const fromDock = parseInt(operation[4]) - 1;
    const toDock = parseInt(operation[6]) - 1;
    const loops = operation[2];
    let moved = [];
    for (let i = loops ; i > 0 ; i--) {
         moved.push(dock[fromDock].pop());
    }
    for (let i = loops ; i > 0 ; i--) {
        dock[toDock].push(moved.pop());
    }
}



console.log(dock);