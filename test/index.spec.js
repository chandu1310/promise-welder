import * as Index from '../src/index';

describe('index', () => {
  it('exports PromiseChain function', () => {
    const { PromiseChain } = Index;
    expect(typeof PromiseChain).to.equal('function');
  });
})