/** @jsx jsx */
import {css, jsx} from '@emotion/core';
import {IconButton, IconRotateCcw, IconPlay} from 'sancho';

const style = css`
	border: 1px solid #888;
	border-radius: 1000px;
`;

const getIcon = status =>
	status === 'working' ? <IconRotateCcw /> : <IconPlay />;

export default ({status}) => {
	return (
		<IconButton
			css={style}
			label="play"
			variant="ghost"
			icon={getIcon(status)}
		/>
	);
};
