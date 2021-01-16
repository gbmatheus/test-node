async function ping(delay) {
  let pong = 'ping';
  try {

    if(delay === undefined) {
      return 'pong';
    }

    if (delay > 3) {
      throw new Error("Delay bigger than 3");
    }

    // let promiseTimeout = new Promise(resolve => setTimeout(() => {resolve('pong')}, delay * 1000));
    let resultPromiseDelay = await new Promise(resolve => 
      setTimeout(() => {
        resolve('pong')
      
      }, delay * 1000));
    
    return resultPromiseDelay;

  } catch (error) {
    return error.message;
  }
}

module.exports = ping;
