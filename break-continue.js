// break in while loop
var i = 0;
while (i < 15) {
    console.log(i);
    if (i == 5) {
        break;
    }
    i++;

}
// break in for loop
for (var i = 0; i <= 20; i++) {
    console.log(i);
    if (i == 8) {
        console.log('break for loop . way 1')
        break;
    }
}

var numbers = [23, 44, 85, 34, 76, 95, 152, 91, 89, 123, 34, 345];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 100) {
        console.log('break for loop. way 2')
        break;// ei break er mane hocca je, jhokhon kono number gulu aste aste 100 er oporer kono shogkha chole asbe tokhoni ei break r dakhabe na. 100 er oporer shogkha aslei bondo hoye jabe.
    }
    console.log(number)
}

// 
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 100) {
        continue;// akhaner ei continue er mane holo je skip kore jawya. mane if er condition onujayi 100 er boro shogkha  gulo skip kore porer shogkha nite.
    }
    console.log(number)
}
