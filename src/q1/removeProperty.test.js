const removeProperty = require('./removeProperty');

describe('Remove Property', () => {

  const people ={ firstName: 'josé', lastName: 'silva', age: '30', birthday: '2021-1-15'};
  
  test('It should verify property exists in object', () => {
    const isPropertyExist = removeProperty(people, 'birthday');
    expect(isPropertyExist).toBe(true);
  })

  test('It should return false for property is not exists in object', () => {
    const isPropertyExist = removeProperty(people, 'birthday');
    expect(isPropertyExist).toBe(false);
  })

  test('It should remove object property recieve as parameter', () => {
    const isPropertyRemove = removeProperty(people, 'age');
    expect(isPropertyRemove).toBe(true);
  })

})