/**
 * tokeniser breaks decomposes a string into an array of continuous letters or numbers
 *
 * @example
 * ```
 * tokeniser("foo12bar13"); // => ["foo", "12", "bar", "13"]
 * ```
 */
export const tokeniser = (input: string): string[] => {
	if (input.length === 0) return [];
	const result: string[] = [input[0]];
	for (let i = 1; i < input.length; i++) {
		const prev = input[i - 1];
		const current = input[i];
		if (isSameType(prev, current)) {
			append(result, current);
		} else {
			result.push(current);
		}
	}
	return result;
};

// Char codes
const PERIOD = 46;
const ZERO = 48;
const NINE = 57;

const charCodeIsNumeric = (i: number): boolean => {
	if (i === PERIOD) return true;
	if (i >= ZERO && i <= NINE) return true;
	return false;
};

/**
 * Returns true if string represents a digit or decimal point
 */
const isNumeric = (s: string): boolean => {
	return charCodeIsNumeric(s.charCodeAt(0));
};

/**
 * Returns true if `a` and `b` are either:
 * a. Both numeric
 * b. Both not numeric
 */
const isSameType = (a: string, b: string): boolean => {
	return isNumeric(a) === isNumeric(b);
};

/**
 * Appends string `s` to last element of `array`
 */
const append = (a: string[], s: string): string => a[a.length - 1] += s;
