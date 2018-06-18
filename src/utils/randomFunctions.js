const getRandomIndex = (upperBound) => Math.floor(Math.random() * upperBound);

const getRandomProperty = (object) => {
  const keys = Object.keys(object);
  return keys[getRandomIndex(keys.length)];
}

const getRandomArrayItem = (array) => {
  return array[getRandomIndex(array.length)];
}

const generateDeviation = (baseNumber, deviation) => {
  return baseNumber + Math.floor(Math.random() * deviation) - deviation / 2;
}

const generateBoolean = () => {
  return !!Math.round(Math.random());
}

const generateNumber = (from, to) => {
  return Math.floor(Math.random() * (to - from)) + from;
}

const generateArithmeticOperation = () => {
  const operations = ['+', '-'];
  return operations[getRandomProperty(operations)];
}

//Fisher-Yates Shuffle
const shuffle = (array) => {
  const length = array.length;
  for (let i = length - 1; i > 0; i--) {
    let j = getRandomIndex(i + 1);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffleWord = (word) => {
  return shuffle(word.split(''));
}

export { getRandomIndex, getRandomProperty, getRandomArrayItem, generateDeviation, generateBoolean, generateNumber, generateArithmeticOperation, shuffle, shuffleWord };