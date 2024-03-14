// Write your solution here!
const cats = [ "Milo", "Otis", "Garfield"]

function destructivelyAppendCat(Ralph) {
  cats.push(Ralph);
}
function destructivelyPrependCat(Garfield) {
    cats.unshift(Garfield);

  }
  function destructivelyRemoveLastCat(Ralph) {
  cats.pop(Ralph);
}
function destructivelyRemoveFirstCat(Milo) {
    cats.shift(Milo)
}
function appendCat(cat){
    const newCats = cats.concat(cat);
    return newCats; 
}
function prependCat(Arnold) {
    const newCats = [Arnold ,...cats];
    return newCats; 
}
function removeLastCat(){
    const newCats = cats.slice(0, -1);
    return newCats; 
}
function removeFirstCat(){
    const newCats = cats.slice(1);
    return newCats; 
}