const {expect, assert} = require('chai');
const {MakeContract} = require('tos');

describe('hello contract test', function () {
  this.timeout(10000);
  let hello;
  before(async function () {
    hello = await MakeContract('hello');
  });
  it('should success typeoscript1 say hi to typeoscript1', async function () {
    let result = await hello.hi('typeoscript1');
    expect(result).to.not.be(undefined);
    expect(result.transaction).to.not.be(undefined)
  })
})