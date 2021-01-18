const ping = require("./pingPong");
const pingArray = require('./pingArray');
const createArrayRandom = require('./createArrayRandom');

describe("Function Async Ping", () => {
  // Melhorar teste com tratamento de erro
  test("It should error for a delay bigger than 3", async () => {
    const err = await ping(4);

    // expect(err).toEqual('Delay bigger than 3');
    expect(err).toEqual('error');
  });

  test("It should return pong immediately, no argument passed", async () => {
    const pong = await ping();

    expect(pong).toEqual("pong");
  });

  test("It should return pong after 3 seconds", async () => {
    const pongAfter3s = await ping(3);

    expect(pongAfter3s).toEqual("pong");
  });

  test("It should return a array number random", async () => {
    const resultArrayRandom = createArrayRandom(5);

    expect(resultArrayRandom.length).toBe(5);
  });

  test("It should return [pong, error, pong] for array [1,4,2]", async () => {
    const resultPing = await pingArray([1,4,2]);

    expect(resultPing).toEqual(['pong', 'error', 'pong']);
  });

  test('It should return pong or error for array random', async () => {
    const delaysRandom = createArrayRandom(10);
    const resultPingArry = await pingArray(delaysRandom);

    const returnExpectedForPingArray = delaysRandom.map(delay => {
      return delay > 3 ? 'error' : 'pong';
    })

    expect(resultPingArry).toEqual(returnExpectedForPingArray);

  })



});
