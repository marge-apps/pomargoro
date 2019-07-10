import React from 'react';
import subtract from 'ramda/src/subtract';
import cond from 'ramda/src/cond';
import head from 'ramda/src/head';
import tail from 'ramda/src/tail';
import gte from 'ramda/src/gte';
import lt from 'ramda/src/lt';
import T from 'ramda/src/T';
import anyPass from 'ramda/src/anyPass';
import __ from 'ramda/src/__';
import dayjs from 'dayjs';

const minutes = num => num * 60;

const state = {
	timeplan: [
		[minutes(25), {status: 'work', id: 0}],
		[minutes(5), {status: 'break', id: 1}],
		[minutes(25), {status: 'work', id: 2}],
		[minutes(5), {status: 'break', id: 3}],
		[minutes(25), {status: 'work', id: 4}],
		[minutes(5), {status: 'break', id: 5}],
		[minutes(25), {status: 'work', id: 6}],
		[minutes(30), {status: 'break', id: 7}],
	],
};

export const total = timeplan =>
	timeplan.reduce((acc, item) => acc + item[0], 0);

const ltZero = lt(__, 0);
const gtMax = total => gte(__, total);
const outOfBounds = total => anyPass([ltZero, gtMax(total)]);
const finish = () => ({
	status: 'work',
	time: minutes(25),
	id: 0,
});

const buildSet = (number, rest) => {
	const timeOfSet = head(rest)[0];
	const setDetails = head(rest)[1];
	const remaining = subtract(timeOfSet, number);

	return {
		time: remaining,
		...setDetails,
	};
};

const isLonger = (number, rest) => gte(number, head(rest)[0]);
const isWithinSet = (number, rest) => lt(number, head(rest)[0]);

export const findSet = (timeplan = state, started, now) => {
	const totalTime = total(timeplan);

	const loop = cond([
		[outOfBounds(totalTime), finish],
		[
			isLonger,
			(number, rest) => loop(subtract(number, head(rest)[0]), tail(rest)),
		],
		[isWithinSet, buildSet],
		[T, finish],
	]);

	const seconds = dayjs(now).diff(dayjs(started), 'seconds');

	return loop(seconds, timeplan);
};

const Pomargoro = () => <div>Pomargoro</div>;

export default Pomargoro;
