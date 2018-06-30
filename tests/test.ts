import { assert } from "chai";
import { foo } from "../lib/index";

describe("Generic test", () => {
	it ("passes", () => {
		assert.equal(foo(), 1);
	});
});
