const app = "I don't do much."

const kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  const newLitter = [...kittens, name];
  return newLitter;
}

function prependKitten(name) {
  const newLitter = [name, ...kittens];
  return newLitter;
}

function removeLastKitten() {
  newKittens = kittens.slice(1);
  return newKittens;
}














