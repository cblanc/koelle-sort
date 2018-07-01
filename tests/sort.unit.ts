// Many test come from https://github.com/TrySound/alphanum-sort/blob/master/test.js

import { assert } from "chai";
import { alphanum } from "../lib/index"; 
import { shuffle } from "./helper/index";

const test = (expected: string[]): void => {
	const shuffled = shuffle(expected);
	assert.deepEqual(shuffled.sort(alphanum), expected);
};

describe("alphanum sort feature set", () => {
	it ("sorts numbers", () => {
		test(['00', '0', '01', '1', '05', '5', '5', '8', '10']);
	});

	it ("sorts letters", () => {
		test(['a', 'b', 'c', 'd', 'v']);
	});

	it ("sorts mixed data", () => {
		test(['00', '5', '10', '10f', 'f', 'k', 'z', 'z00', 'z10']);
	});

	it ("sorts similar dates", () => {
		test(['1991/01/01', '1992/01/01', '2008/01/01', '2008/10/01']);
	});

	it ("sorts similar dates", () => {
		test(['0000-3-34', '1999-3-3', '1999-12-25', '2000-1-2', '2000-1-10', '2000-3-23']);
	});

	it ("sorts ISO8601-ish YYYY-MM-DDThh:mm:ss", () => {
		test(['2009-01-15 01:45:30', '2009-06-15 13:45:30', '2010-06-15 13:45:30']);
	});

	it ("sorts unix epoch, Date.getTime()", () => {
		test(['14330728000', '1245098728000', '1245098730000']);
	});

	it ("sorts decimal numbers", () => {
		test(['1.002', '1.002', '1.002', '1.009', '1.009', '1.009', '1.010', '1.011']);
	});

	it ("sorts padded numbers", () => {
		test(['0001', '001', '002']);
	});

	it ("sorts simple filenames", () => {
		test(['img1.png', 'img2.png', 'img10.png', 'img12.png']);
	});

	it ("sorts complex filenames", () => {
		test(['001alpha.sgi', '01alpha.sgi', 'car.mov', 'my.string_41299.tif', 'organic2.0001.sgi']);
	});

	it ("sorts empty strings", () => {
		test(['', '2', '5', '999', '10023']);
	});

	it ("sorts by number first", () => {
		test(['1A', '1D', '2C', '2D', '2M', '5C', '5D', '5E', '5F', '5S', '33A', '33D', '33K']);
	});

	// Not Implemented
	// it ("sorts skipping whitespace", () => {
	// 	test(['0', ' 1', ' 2', '  3', 'alpha']);
	// });
	// it ("sorts IP addresses", () => {
	// 	test(['10.0.0.1', '10.0.0.2', '192.168.0.1', '192.168.0.100', '192.168.0.250', '192.168.1.1', '192.168.1.123']);
	// });
	// it ("sorts multi-digit branch releases", () => {
	// 	test(['1.0.0001', '1.0.002', '1.0.003', '1.0.03']);
	// });
	// it ("sorts string first releases", () => {
	// 	test(['myrelease-1.0.5', 'myrelease-1.1.1', 'myrelease-1.1.3', 'myrelease-1.1.4', 'myrelease-1.2.3']);
	// });
	// it ("sorts close release numbers", () => {
	// 	test(['1.0.0', '1.0.1', '1.0.2', '1.0.9']);
	// });
	// it ("sorts close version numbers (2)", () => {
	// 	test(['1.0.1alpha4', '1.0.2alpha1', '1.0.2alpha3', '1.1.2alpha3', '1.1beta', '2.1.1', '2.1.2']);
	// });
});
