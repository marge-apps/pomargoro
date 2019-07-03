/** @jsx jsx */
import {css, jsx} from '@emotion/core';
import styled from '@emotion/styled';
import TimeDisplay from './time-display';
import Status from './status';
import ActionButton from './action-button';
import Dots from './dots';

const Flex = css`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 250px;
	width: 250px;
	border: 1px solid #888;
	padding: 2rem;
`;

export default () => (
	<div css={Flex}>
		<TimeDisplay milliseconds={1720000} />
		<Status>Working</Status>
		<ActionButton status="working" />
		<Dots />
	</div>
);
