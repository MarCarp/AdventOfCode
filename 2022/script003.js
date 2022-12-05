const roughData = document.querySelector('pre').innerHTML;
let checkAll = [];
const pairs = roughData.split('\n');
const organizedPairs = pairs.map(function(el){
    const first = el.split(',');
    return first.map((ell) => ell.split('-'));
})
let counter = 0;
let counterOver = 0;

organizedPairs.pop();
console.log(organizedPairs);

for (const i of organizedPairs) {
    if (((parseInt(i[0][0]) >= parseInt(i[1][0])) && (parseInt(i[0][1]) <= parseInt(i[1][1]))) || 
    ((parseInt(i[1][0]) >= parseInt(i[0][0])) && (parseInt(i[1][1]) <= parseInt(i[0][1])))) {
        checkAll.push(1);
        counter++;
    } else {
        checkAll.push(0);
    }
}

for (const i of organizedPairs) {
    for (let j = parseInt(i[0][0]); j <= parseInt(i[0][1]); j++) {
        for (let k = parseInt(i[1][0]); k <= parseInt(i[1][1]); k++){
            if(parseInt(j) === parseInt(k)){
                console.log(j + ' est bien eqale à ' + k);
                counterOver++;
                j = 1000;
                k = 1000;
            }
        }
    }
}

console.log(counterOver);