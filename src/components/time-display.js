/** @jsx jsx */
import {jsx} from '@emotion/core';
import {Text} from 'sancho';
import {Duration as duration} from 'luxon';

export default ({children, milliseconds, ...props}) => {
	const formattedTime = duration.fromMillis(milliseconds).toFormat('hh:mm:ss');

	return (
		<Text variant="display2" gutter={false}>
			{formattedTime}
		</Text>
	);
};
