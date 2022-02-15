var phoneCompany = ['iphone', 'samsung', 'google', 'xiomi', 'oneplus', 'oppo', 'tecno', 'vivo', 'realme', 'nokia']
console.log(phoneCompany);
phoneCompany[6] = 'walton';
console.log(phoneCompany);
// check an element exists / not exists in an array
//check lg not exists in an array
if (phoneCompany.indexOf('lg') == -1) {
    console.log('lg is not here')
}
// check oneplus exists in an array
// ei check tai ekto onno babe kora jay. opporer array er modder oneplus jhahetu ace tai ater index number kinto 0 othoba 1/2/3.. ei hobe. konobabei kinto -1 hobe na. tai jhehetu -1 hoy nai r tai oneplus available dakhacce.
if (phoneCompany.indexOf('oneplus') != -1) {
    console.log('oneplus is available')
}

//loop
// while loop
var i = 0;
while (i < 10) {
    // console.log(i);
    i++;
}
// for loop
for (var i = 0; i <= 10; i++) {
    //console.log(i)
}

// function
function addThreeNumbers(fuckone, fucktwo, fuckthree) {
    console.log(fuckone, fucktwo, fuckthree);
    var total = fuckone + fucktwo + fuckthree;
    return total;
}
var num1 = 23;
var num2 = 34;
var num3 = 89;
var result = addThreeNumbers(num1, num2, num3);
console.log(result)
// object
var mouse = {
    brand: 'xtreami',
    color: 'black',
    price: 190,
}
console.log(mouse)