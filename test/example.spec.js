import src1 from '../src/example.js';

describe('Example()', () => {
  test('Should return a test message', () => {
    expect(src1()).toEqual('Init');
  });
});
