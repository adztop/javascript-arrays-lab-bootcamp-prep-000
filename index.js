// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
  var kittens = [name,...kittens]
}

function prependKitten(name){
  var kittens = [...kittens,name]
}

function removeLastKitten(){
  var kittens = kittens.slice(0, kittens.length -1)
}

function removeFirstKitten(){
  var kittens = kittens.slice(1)
}