import { tokeniser } from "./tokeniser";

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

