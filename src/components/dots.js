/* @jsx jsx */
import {jsx} from '@emotion/core';
import styled from '@emotion/styled';
import FullDot from '../assets/dot-full';
import HalfDot from '../assets/dot-half';

const Flex = styled('div')`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const SmallDot = () => <FullDot height={0.8} />;

export default () => {
	return (
		<Flex>
			<FullDot />
			<HalfDot />
			<SmallDot />
		</Flex>
	);
};
