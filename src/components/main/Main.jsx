import Form from '../form/Form';
import { StyledBox, StyledP, StyledSpan } from './styles';

const Main = () => {
	return (
		<main>
			<StyledBox>
				<StyledP>
					<StyledSpan>Try it free 7 days</StyledSpan> then $20/mo. thereafter
				</StyledP>
			</StyledBox>
			<Form />
		</main>
	);
};

export default Main;
