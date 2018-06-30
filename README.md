[![CircleCI](https://circleci.com/gh/cblanc/koelle-sort.svg?style=svg)](https://circleci.com/gh/cblanc/koelle-sort) [![Coverage Status](https://coveralls.io/repos/github/cblanc/koelle-sort/badge.svg?branch=master)](https://coveralls.io/github/cblanc/koelle-sort?branch=master) [![Greenkeeper badge](https://badges.greenkeeper.io/cblanc/koelle-sort.svg)](https://greenkeeper.io/)

# Koelle Sort

Also known as alphanum sort

## Usage

```
npm install @cablanchard/koelle-sort
```

```
const { alphanum } = require("@cablanchard/koelle-sort");

const sorted = [
	"file10.txt"
	"file1.txt",
	"file2.txt",
].sort(alphanum);
```

## License

Based on the alphanum algorithm developed by [Dave Koelle](http://www.davekoelle.com/)

This implementation is MIT licensed
