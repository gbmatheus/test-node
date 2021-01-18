const ping = require('./pingPong');

async function pingArray(delays) {
  const resultPingArrayDelay = await Promise.all(
    delays.map((delay) => ping(delay))
  );

  return resultPingArrayDelay;
}

module.exports = pingArray;
