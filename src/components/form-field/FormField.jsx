import { StyledInput } from './styles';

const FormField = ({ text, type, name, handleChangeFormValues }) => {
	return (
		<StyledInput
			type={type}
			name={name}
			placeholder={text}
			onChange={handleChangeFormValues}
			// required
		/>
	);
};

export default FormField;
