function ping(delay) {
  if (delay === undefined) {
    return "pong";
  }

  if (delay > 3) {
    return 'error';
  }
  const resultPromiseDelay =  promiseTimeout(delay).then(result => {
    return result}).catch(err => console.log(err));
  
  return resultPromiseDelay;
}

function promiseTimeout(delay) {
return new Promise((resolve) =>
  setTimeout(() => {
    resolve("pong");
  }, delay * 1000)
);
}

module.exports = ping;
