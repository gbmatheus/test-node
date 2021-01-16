const reverseDate = require('./reverseDate');


describe('Reverse date', () => {

  test('It should recieve and return are strings', () => {
    const result = reverseDate('00/00/0000');
    const isString = typeof(result);

    expect(isString).toEqual('string');
  })

  test('It should return error message for wrong input format', () => {
    const result = reverseDate('16/2020/01');
    
    expect(result).toMatch('Invalid format');

  })

  test('It should return date reversed in format yyyyMMdd', () => {
    const result = reverseDate('10/26/2020');

    expect(result).toMatch("20201026");
  })

})