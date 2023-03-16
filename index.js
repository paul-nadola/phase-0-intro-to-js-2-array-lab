// Write your solution here!
/*pr = console.log*/
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
cats.push("Ralph")
}
/*pr(cats)*/
function destructivelyPrependCat(name) {
    cats.unshift('Bob')
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
/*function appendCat(name){
    const copyOfCats = cats.slice();
    copyOfCats.push('Broom')
}*/
function appendCat(name){
    const copyOfCats = [...cats, "Broom"];
    return copyOfCats;
}
function prependCat(name){
    const copyOfCats =["Arnold", ...cats];
    return copyOfCats;
}
function removeLastCat(){
    const copyOfCats = cats.slice(0, -1);
    return copyOfCats;
}
function removeFirstCat() {
    const copyOfCats = cats.slice(-2);
    return copyOfCats;
}