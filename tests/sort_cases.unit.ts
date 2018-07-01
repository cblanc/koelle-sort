import { shuffle, randomInt } from "./helper/index";
import { join } from "path";
import { assert } from "chai";
import { readdirSync } from "fs";
import { alphanum } from "../lib/index"; 

interface TestCase {
	file: string;
	sorted: string[];
}

/**
 * Reads JSON files that match `*.sorted.json`
 * These files represent sorted responses
 */
const testCases: TestCase[] = readdirSync(join(__dirname, "test_cases"))
	.filter(file => file.match(/\.sorted\.json$/))
	.map(file => {
		return {
			file,
			sorted: require(`./test_cases/${file}`),
		}
	});

describe("sort", () => {
	testCases.forEach(testCase => {
		const { sorted, file } = testCase;
		it(`correctly sorts test case ${file}`, () => {
			const shuffled = shuffle(sorted);
			assert.notDeepEqual(shuffled, sorted);
			assert.deepEqual(shuffled.sort(alphanum), sorted);
		});
	});
});
