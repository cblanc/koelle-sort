const { Suite } = require("benchmark");
const suite = new Suite();

const { alphanum } = require("./lib/index.ts");
const data = require("./tests/test_cases/1.sorted.json");

const naturalSort = require("natural-sort");
const { compare } = require("alphanumeric-sort");
const { orderBy } = require("natural-orderby");
const jsn = require("javascript-natural-sort").naturalSort;

suite.add("ASCII Sort - Array.sort()", () => {
  data.sort();
})
.add("@cablanchard/koelle-sort", () => {
  data.sort(alphanum);
})
.add("npm/natural-sort", () => {
	data.sort(naturalSort());
})
.add("npm/natural-orderby", () => {
	orderBy(data);
})
.add("npm/alphanumeric-sort", () => {
	data.sort(compare);
})
.add("npm/javascript-natural-sort", () => {
	data.sort(jsn);
})
.on("cycle", (event) => {
  console.log(String(event.target));
})
.run({ async: true });
