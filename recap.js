// 1. Variable
var favoriteBook = 'The 4-Hour  Workweek';
// 2. Array or Array related
var favoriteBooks = ['Good To Great', 'The Lean Startup', 'Start With Why', 'Zero to One']
var zeroToHeroIndex = favoriteBooks.indexOf('Zero to One');
favoriteBooks[1] = 'Story Bread';
favoriteBooks.push('The E Myth');
favoriteBooks.pop();
console.log(favoriteBooks)

// 3. Conditionals
if (favoriteBooks[1] == 'Story Bread') {
    console.log('Show Story Bread');
}
else {
    console.log('it is not true on if ')
}
// 4. Loop 
//while loop
var i = 0; // loop variable
while (i < 15) {
    console.log('looping from while loop', i);
    i++;
}
//for loop
for (var i = 0; i <= 7; i++) {
    console.log(i, "looping from for loop")
}