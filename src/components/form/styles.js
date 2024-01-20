import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

export const StyledForm = styled.form`
	background-color: ${COLORS.text};
	/* height: 442px; */
	border-radius: 10px;
	background: #fff;

	box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
	padding: 24px;
`;

export const StyledButton = styled.button`
	background-color: ${COLORS.green};
	height: 56px;
	border: 1px solid transparent;
	border-radius: 10px;
	box-shadow: 0px -4px 0px 0px rgba(0, 0, 0, 0.09) inset;
	width: 100%;
	padding: 15px 45px;
	color: #fff;
	font-weight: 600;
	line-height: 26px;
	font-size: 14px;
`;

export const StyledBottomText = styled.p`
	color: ${COLORS.purple};
	font-size: 11px;
	font-weight: 500;
	line-height: 21px;
	width: 249px;
`;

export const StyledSpan = styled.span`
	color: ${COLORS.red};
	font-weight: 700;
`;
