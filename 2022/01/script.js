const roughData = document.querySelector('pre');
let inventory = [];

let snacks = [];
let snack = '';
let statusCrawl = 0;

counterLimitTest = 50;

for (const eachy of roughData.innerHTML) {
    if(counterLimitTest < 0) {
        break;
    }
    
    if(eachy.charCodeAt(0) !== 10 && eachy.charCodeAt(0) !== 32) {
        statusCrawl = 0;
        snack += eachy;
    } else {
        statusCrawl++;        
        if(statusCrawl === 1) {
            snacks.push(parseInt(snack));
            snack = '';
        } else if (statusCrawl === 3) {
            inventory.push(snacks);
            snacks = []
        }
    }
}

console.log(inventory);

const totalSnacks = inventory.map(function(x){
    let total = 0;
    for (const elem of x) {
        console.log(elem);
        total += parseInt(elem);
    }
    return total;
});

console.log(totalSnacks);

console.log(Math.max(...totalSnacks));

const sortedSnaks = totalSnacks.sort(function(a, b) {
    return b - a;
  });

console.log(sortedSnaks);

let threetop = 0;

for (let i = 0 ; i < 3; i++) {
    threetop += parseInt(sortedSnaks[i]);
}

console.log(threetop);