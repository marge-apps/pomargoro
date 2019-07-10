import {total, findSet} from '.';

const minutes = num => num * 60;
const start = '2019-04-07T16:00:00.000Z';
const afterTime = (hour = '16', minutes = '00', seconds = '00') =>
	`2019-04-07T${hour}:${minutes}:${seconds}.000Z`;

const fixture = [
	[minutes(25), {status: 'work', id: 0}],
	[minutes(5), {status: 'break', id: 1}],
	[minutes(25), {status: 'work', id: 2}],
	[minutes(5), {status: 'break', id: 3}],
	[minutes(25), {status: 'work', id: 4}],
	[minutes(5), {status: 'break', id: 5}],
	[minutes(25), {status: 'work', id: 6}],
	[minutes(30), {status: 'break', id: 7}],
];

describe('total()', () => {
	it('will return total time of sets in seconds', () => {
		const actual = total(fixture);
		const expected = 8700;

		expect(actual).toEqual(expected);
	});
});

const testSet = test =>
	it.each`
		now                      | set
		${afterTime(16, 24)}     | ${{id: 0, status: 'work', time: 60}}
		${afterTime(16, 26)}     | ${{id: 1, status: 'break', time: 240}}
		${afterTime(16, 32)}     | ${{id: 2, status: 'work', time: 1380}}
		${afterTime(16, 54, 59)} | ${{id: 2, status: 'work', time: 1}}
		${afterTime(16, 55)}     | ${{id: 3, status: 'break', time: 300}}
		${afterTime(16, 57)}     | ${{id: 3, status: 'break', time: 180}}
		${afterTime(18, 24, 59)} | ${{id: 7, status: 'break', time: 1}}
	`(`will return {id: $set.id, status: $set.status given ...}`, test);

describe('findSet()', () => {
	testSet(({now, set}) => {
		const actual = findSet(fixture, start, now);

		expect(actual).toEqual(set);
	});
});
