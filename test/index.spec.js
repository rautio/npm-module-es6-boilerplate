import index from '../src/index.js';

describe('Index.js should', () => {
  test('be a function', () => {
    expect(typeof index).toEqual('function');
  });
  test('and return "init"', () => {
    expect(index()).toEqual('Init');
  });
});
