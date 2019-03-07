//15 values array
var tab = [91,82,73,64,55,46,37,28,39,40,51,62,73,84,95];
    console.table(tab);
//Add 100 values between 10 and 100 into the array
for (var i = 0; i < 100; i++) {
    var n = Math.floor(Math.random() * (100-10) + 10) + 1;
    tab.push(n);
}
console.table(tab); 



//Highest value
var max = tab[0];
for (i = 0; i < tab.length ; i++) {
    if (tab[i] > max) {
        max = tab[i];
    }
}
console.info(max);
// console.log(Math.max.apply(null, tab));

//Lowest value
var min = tab[0];
for (i = 0; i < tab.length ; i++) {
    if (tab[i] < min) {
        min = tab[i];
    }
}
console.info(min);
// console.log(Math.min.apply(null, tab));

//Values sum
var sum = 0;
for(var i = 0; i < tab.length ; i++){
    sum +=(tab[i]);
}
console.log(sum);

//Values average
var avg = sum / tab.length;
console.log(avg);

//
var tab1 = [];
var tab2 = [];
for (i = 0; i < tab.length ; i++) {
    if (tab[i]<= 20) {
        tab1.push(tab[i]);
    } else {
        tab2.push(tab[i]);
    }
}
console.table(tab1);
console.table(tab2);