/**
 * Alphanum numeric comparator method
 */
export const alphanum = (a: string, b: string): number => {
	return 0;
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

const isNumeric = (s: string): boolean => {
	return charCodeIsNumeric(s.charCodeAt(0));
};

const isSameType = (a: string, b: string): boolean => {
	const aIsNumeric = isNumeric(a);
	const bIsNumeric = isNumeric(b);
	if (aIsNumeric && bIsNumeric) return true;
	if (!aIsNumeric && !bIsNumeric) return true;

	return false;
};

const append = (array: string[], s: string): void => {
	array[array.length - 1] += s;
};
 
export const tokeniser = (input: string): string[] => {
	if (input.length === 0) return [];
	const result: string[] = [input[0]];
	for (let i = 1; i < input.length; i++) {
		const prev = input[i - 1]
		const current = input[i];
		if (isSameType(prev, current)) {
			append(result, current);
		} else {
			result.push(current);
		}
	}

	return result;
};
