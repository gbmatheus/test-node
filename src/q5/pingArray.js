async function pingArray(delays) {
  const resultPingArrayDelay = await Promise.all(
    delays.map((delay) => ping(delay))
  );
  console.log("test ", resultPingArrayDelay);

  return resultPingArrayDelay;
}

async function ping(delay) {
  if (delay === undefined) {
    return "pong";
  }

  if (delay > 3) {
    return "error";
  }

  let pongPromiseTimeout = await promiseTimeout(delay);

  return pongPromiseTimeout;
}

function promiseTimeout(delay) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("pong");
    }, delay * 1000)
  );
}

module.exports = pingArray;
