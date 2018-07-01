/**
 * Alphanum numeric comparator method
 */
export const alphanum = (a: string, b: string): number => {
	const A = tokeniser(a.toLowerCase());
	const B = tokeniser(b.toLowerCase());
	for (let i = 0; A[i] && B[i]; i++) {
		if (A[i] !== B[i]) {
			// Attempt to compare as numbers first
			const r = compareNumbers(A[i], B[i]);
			if (!isNaN(r)) return r;
			// If number comparison fails, use string comparison
			return compareTokens(A[i], B[i]);
		}
	}
	return A.length - B.length;
};

/**
 * String comparator
 */
const compareTokens = (a: string, b: string): number => {
	return (a > b) ? 1 : -1;
};

/**
 * Number comparator 
 * Compares tokens as numbers. Returns `NaN` if comparison not possible
 */
const compareNumbers = (a: string, b: string): number => {
	const An = Number(a);
	const Bn = Number(b);
	if (isNaN(An) || isNaN(Bn)) return NaN;
	// Handle the case where numbers have 0 padding
	// e.g. '005' vs '5'
	if (An === Bn) return b.length - a.length;
	return An - Bn;
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
