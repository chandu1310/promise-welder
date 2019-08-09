import { PromiseChain } from '../src/PromiseChain';

let p1, p2, p3;

describe('PromiseChain', () => {
  beforeEach( () => {
    p1 = sandbox.stub().callsFake( () => Promise.resolve({ x: 1}) );
    p2 = sandbox.stub().callsFake( () => Promise.resolve({ x: 3}) );
  });

  it('chains promise functions as expected', () => {
    return PromiseChain( [ p1, p2 ], {x: 0}).then( 
      (result) => {
        expect(result).to.deep.equal({x: 3});
      }
    );
  });

  it('chains the promises in provided order', () => {
    p1 = sandbox.spy((x) => Promise.resolve(x+1));
    p2 = sandbox.spy((x) => Promise.resolve(x+1));
    p3 = sandbox.spy((x) => Promise.resolve(x+1));

    return PromiseChain( [ p1, p2, p3 ], 0).then( 
      (result) => {
        expect(result).to.equal(3);
        expect(p1.calledBefore(p2)).to.be.true;
        expect(p2.calledBefore(p3)).to.be.true;
      }
    );
  });

  it('calls promises with expected values during chaining', () => {
    p1 = sandbox.spy((x) => Promise.resolve(x+1));
    p2 = sandbox.spy((x) => Promise.resolve(x+1));
    p3 = sandbox.spy((x) => Promise.resolve(x+1));

    return PromiseChain( [ p1, p2, p3 ], 0).then( 
      (result) => {
        expect(p1.calledOnceWith(0)).to.be.true;
        expect(p2.calledOnceWith(1)).to.be.true;
        expect(p3.calledOnceWith(2)).to.be.true;
        expect(result).to.equal(3);
      }
    );
  });
  
})