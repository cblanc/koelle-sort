const { Suite } = require("benchmark");
const suite = new Suite();
const { shuffle } = require("./tests/helper/index");
const { alphanum } = require("./lib/index.ts");
const data = shuffle(require("./tests/test_cases/1.sorted.json"));

const naturalSort = require("natural-sort");
const { compare } = require("alphanumeric-sort");
const { orderBy } = require("natural-orderby");
const jsn = require("javascript-natural-sort").naturalSort;

suite.add("ASCII Sort - Array.sort()", () => {
  data.slice().sort();
})
.add("@cablanchard/koelle-sort", () => {
  data.slice().sort(alphanum);
})
.add("npm/natural-sort", () => {
	data.slice().sort(naturalSort());
})
.add("npm/natural-orderby", () => {
	orderBy(data.slice());
})
.add("npm/alphanumeric-sort", () => {
	data.slice().sort(compare);
})
.add("npm/javascript-natural-sort", () => {
	data.slice().sort(jsn);
})
.on("cycle", (event) => {
  console.log(String(event.target));
})
.run({ async: true });
