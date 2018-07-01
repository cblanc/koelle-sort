[![CircleCI](https://circleci.com/gh/cblanc/koelle-sort.svg?style=svg)](https://circleci.com/gh/cblanc/koelle-sort) [![Coverage Status](https://coveralls.io/repos/github/cblanc/koelle-sort/badge.svg?branch=master)](https://coveralls.io/github/cblanc/koelle-sort?branch=master) [![Greenkeeper badge](https://badges.greenkeeper.io/cblanc/koelle-sort.svg)](https://greenkeeper.io/)

# Koelle Sort

Also known as alphanum sort

alphanum sort is designed to produce more sensible results than ascii sort for certain use cases

| ASCII Sort | Koelle's Alphanum Sort |
|:-----------|:-----------------------|
| z1.doc     | z1.doc                 |
| z10.doc    | z2.doc                 |
| z100.doc   | z3.doc                 |
| z101.doc   | z4.doc                 |
| z102.doc   | z5.doc                 |
| z11.doc    | z6.doc                 |
| z12.doc    | z7.doc                 |
| z13.doc    | z8.doc                 |
| z14.doc    | z9.doc                 |
| z15.doc    | z10.doc                |
| z16.doc    | z11.doc                |
| z17.doc    | z12.doc                |
| z18.doc    | z13.doc                |
| z19.doc    | z14.doc                |
| z2.doc     | z15.doc                |
| z20.doc    | z16.doc                |
| z3.doc     | z17.doc                |
| z4.doc     | z18.doc                |
| z5.doc     | z19.doc                |
| z6.doc     | z20.doc                |
| z7.doc     | z100.doc               |
| z8.doc     | z101.doc               |
| z9.doc     | z102.doc               |

## Behaviour

- [Sorts numbers](tests/sort.unit.ts#L13)

## Usage

```
npm install @cablanchard/koelle-sort
```

```javascript
const { alphanum } = require("@cablanchard/koelle-sort");

const sorted = [
	"file10.txt",
	"file1.txt",
	"file2.txt",
].sort(alphanum);

/**
 * [
 * "file1.txt",
 * "file2.txt",
 * "file10.txt",
 * ]
 */
```

## License

Based on the alphanum algorithm developed by [Dave Koelle](http://www.davekoelle.com/)

This implementation is MIT licensed
