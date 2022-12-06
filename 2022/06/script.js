const roughData = document.querySelector('pre').innerHTML;
const packetChecker = [];
counter = 0;
console.log(roughData);

for (elem of roughData){
    counter++;
    if (packetChecker.length < 14) {
        packetChecker.push(elem);
    } else if (packetChecker.length === 14) {
        packetChecker.shift();
        packetChecker.push(elem);
    }

    /*console.log(packetChecker);
    console.log(counter);*/

    if(counter > 14) {
        let testFirst = 14;
    for (letter of packetChecker) {
        let testSecond = 13;
        for (letterB of packetChecker) {
            if (letter !== letterB) {
                testSecond--;
            }
        }
        if (testSecond === 0) {
            testFirst--;
        }
    }
    if (testFirst === 0) {
        console.log(counter);
    }
    }
}