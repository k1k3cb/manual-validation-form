import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const StyledBox = styled.div`
	width: 327px;
	height: 88px;
	border-radius: 10px;
	background: #5e54a4;
	box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
	margin-bottom: 24px;
`;

export const StyledP = styled.p`
	color: ${COLORS.text};
	padding: 18px 66px;
	font-size: 15px;
	font-weight: 400;
	line-height: 26px;
	letter-spacing: 0.268px;
`;

export const StyledSpan = styled.span`
	font-weight: 700;
`;
