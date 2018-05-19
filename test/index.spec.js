import index from '../src/index.js';

describe('Index.js should contain', () => {
  test('.example()', () => {
    expect(typeof index).toEqual('function');
  });
});
