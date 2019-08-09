# promise-welder
[![Build Status](https://travis-ci.org/chandu1310/promise-welder.svg?branch=master)](https://travis-ci.org/chandu1310/promise-welder)
[![npm latest version](https://img.shields.io/npm/v/promise-welder/latest.svg)](https://www.npmjs.com/package/promise-welder)
[![Maintainability](https://api.codeclimate.com/v1/badges/08e79f8877e6af782ec8/maintainability)](https://codeclimate.com/github/chandu1310/promise-welder/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/08e79f8877e6af782ec8/test_coverage)](https://codeclimate.com/github/chandu1310/promise-welder/test_coverage)

## Installation

Run the following command to install as a dependency in your project.

```
npm install promise-welder
```

## Usage

PromiseChain: This handy utility lets you chain functions which have inter dependency and return Promise which drives the next function in the chain. An initial state is provided as part of the call.
Usage Example:

```
const A = ({ x }) => Promise.resolve({ y: x*x });
const B = ({ y }) => Promise.resolve({ z: y*2 });
const C = ({ z }) => Promise.resolve(z*10);

Promise.chainAll( [A, B, C], {x:2} ).then(console.log);

Result:
80
```

## Credits
[Chandra Shekar Chennamsetty](https://github.com/chandu1310)

This project was bootstrapped using [Nodeneeds](https://www.npmjs.com/package/@chandu1310/nodeneeds) utility.
