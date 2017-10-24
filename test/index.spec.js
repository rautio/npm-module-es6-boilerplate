import expect from 'expect';

import index from '../src/index.js';

describe('Index.js should contain', function(){
  it('.example()',function(){
    expect(typeof index.example).toEqual('function');
  });
});
