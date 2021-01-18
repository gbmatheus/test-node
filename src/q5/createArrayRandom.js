function createArrayRandom (length) {
  const arrayRandom  = []

  for (let index = 0; index < length; index++) {
    // numberRandom = Math.random();
    
    numberRandom = Math.random() * 10;
    numberRandom = Math.round(numberRandom);

    arrayRandom.push(numberRandom)
  }

  return arrayRandom;
  
}

module.exports = createArrayRandom;