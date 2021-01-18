function ping(delay) {
  if (delay === undefined) {
    return "pong";
  }

  if (delay > 3) {
    return "error";
  }

  // let promiseTimeout = new Promise(resolve => setTimeout(() => {resolve('pong')}, delay * 1000));
  const resultPromiseTimeout = new Promise((resolve) =>
    setTimeout(() => {
      resolve("pong");
    }, delay * 1000)
  )
    .then((result) => result)
    .catch((err) => {});

  return resultPromiseTimeout;
}

module.exports = ping;
