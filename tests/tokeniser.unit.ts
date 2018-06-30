import { assert } from "chai";
import { tokeniser } from "../lib/index";

interface TestCase {
	input: string;
	expected: string[];
};

const testCases: TestCase[] = require("./test_cases/tokeniser.json");

describe("tokeniser", () => {
	testCases.forEach(testCase => {
		const { input, expected } = testCase;
		it (`correctly decomposes ${input}`, () => {
			assert.deepEqual(tokeniser(input), expected);
		});
	});
});
