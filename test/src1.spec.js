import src1 from '../src/src1';
import expect from 'expect';

describe('Src1()',function(){
  it('Should return a test message',function(){
    expect(src1()).toEqual('This is a test.');
  });
});