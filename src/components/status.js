/** @jsx jsx */
import {jsx} from '@emotion/core';
import {Text} from 'sancho';

export default ({children, ...props}) => {
	return (
		<Text variant="uppercase" {...props}>
			{children}
		</Text>
	);
};
