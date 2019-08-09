export const PromiseChain = (promiseFunctions, initialValue) => {
  const chainedFunctions = [ Promise.resolve(initialValue), ...promiseFunctions];
  return chainedFunctions.reduce(
    (chain, currentPromiseFunction) => chain.then(
      (state) => currentPromiseFunction(state)
    )
  );
}
