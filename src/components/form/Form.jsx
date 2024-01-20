import { useState } from 'react';
import {
	StyledBottomText,
	StyledButton,
	StyledForm,
	StyledSpan
} from './styles';
import FormField from '../form-field/FormField';

const Form = () => {
	const [formValues, setFormValues] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		isDirty: {
			name: false
		},
		errors: {
			firstName: false,
			lastName: false,
			email: false,
			password: false
		}
	});

	return (
		<StyledForm onSubmit={handleSubmit}>
			<FormField
				text='First Name'
				type='text'
				name='firstName'
				handleChangeFormValues={event =>
					handleChangeFormValues(event.target, formValues, setFormValues)
				}
			/>
			<FormField
				text='Last Name'
				type='text'
				name='lastName'
				handleChangeFormValues={event =>
					handleChangeFormValues(event.target, formValues, setFormValues)
				}
			/>
			<FormField
				text='Email'
				type='email'
				name='email'
				handleChangeFormValues={event =>
					handleChangeFormValues(event.target, formValues, setFormValues)
				}
			/>

			<FormField
				text='Password'
				type='password'
				name='password'
				handleChangeFormValues={event =>
					handleChangeFormValues(event.target, formValues, setFormValues)
				}
			/>

			<StyledButton type='submit'>CLAIM YOUR FREE TRIAL</StyledButton>
			<StyledBottomText>
				By clicking the button, you are agreeing to{' '}
				<StyledSpan> our Terms and Services</StyledSpan>
			</StyledBottomText>
		</StyledForm>
	);
};

const handleSubmit = (event, formValues) => {
	event.preventDefault();
	console.log('handleSubmit');
	// console.log(formValues);
};

const handleChangeFormValues = (input, formValues, setFormValues) => {
	const { name, value } = input;
	console.log('inputValue', input);
	setFormValues({ ...formValues, [name]: value });
	console.log('formValues', formValues);
};

export default Form;
