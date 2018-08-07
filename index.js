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
  kittens = [name,...kittens]
}

function prependKitten(name){
  kittens = [...kittens,name]
}

function removeLastKitten(){
  kittens = kittens.slice(0, kittens.length -1)
}

function removeFirstKitten(){
  kittens = kittens.slice(1)
}