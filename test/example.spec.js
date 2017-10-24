import src1 from '../src/example.js';
import expect from 'expect';

describe('Example()',function(){
  it('Should return a test message',function(){
    expect(src1()).toEqual('This is a test.');
  });
});
