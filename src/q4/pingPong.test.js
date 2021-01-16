const ping = require('./pingPong');

describe('Function Async Ping', () => {

  // Melhorar teste com tratamento de erro
  test('It should error for a delay bigger than 3', async () => {
    const err = await ping(4);
    
    expect(err).toEqual('Delay bigger than 3');

  })

  test('It should return pong immediately, no argument passed', async () => {
    const pong = await ping();

    expect(pong).toEqual('pong');
  })

  test('It should return pong after 3 seconds', async () => {
    const pongAfter3s = await ping(3);

    expect(pongAfter3s).toEqual('pong');

  })

})