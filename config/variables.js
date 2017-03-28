/*
 * a = accumulator
 * c = current element
 * v = value
 */
const getValues = (a, c) => {
	const v = process.env[c];

	if (v) a[c] = v;
	else throw new Error('Enviromental property '+c+' is missing');

	return a;
}
export default [
	'APP_PORT',
	'DB_HOST',
	'DB_USER',
	'DB_PASS',
	'DB_DATABASE'
].reduce(getValues, {});
