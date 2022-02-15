//multiple ways to get on object property

var laptop = {
    price: 26000,
    proccesor: 'Amd athlon',
    ram: '4 gb',
    storage: '1 TB',
    color: 'black',
    brand: 'acer',
}
console.log(laptop);
// but jodi object er shob property na dakha, just kono specific property er value/man dakte chai taile console > object name > property name. example ---
console.log(laptop.proccesor);
// jodi object er specific property er value variable er maddome bar korte chai taileo perbo . example ----
var laptopPrice = laptop.price;
console.log(laptopPrice);


// multiple ways to set of on object property
// jodi kono specific property er value change korte chai but taileo korte perbo. jeta onekta push er moto. example---
laptop.price = 15000;
console.log(laptop);
// another way
laptop["color"] = "green";
console.log(laptop);
// another way
laptop.brand = 'hp';
console.log(laptop);
// another way
var storageProperty = "storage";
laptop[storageProperty] = '10 TB'
console.log(laptop);