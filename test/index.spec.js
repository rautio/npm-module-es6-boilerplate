import expect from 'expect';

import index from '../src/index.js';

describe('Index.js should contain', function(){
  it('.test()',function(){
    expect(typeof index.test).toEqual('function');
  });
});