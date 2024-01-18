import { useState } from 'react';
import { StyledForm } from './styles';

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
			<div>
				<label>
					First Name:
					<input
						type='text'
						name='firstName'
						onChange={handleChangeFormValues}
						required
					/>
				</label>
			</div>
			<div>
				<label>
					Last Name:
					<input
						type='text'
						name='lastName'
						onChange={handleChangeFormValues}
						required
					/>
				</label>
			</div>
			<div>
				{' '}
				<label>
					Email:
					<input
						type='email'
						name='email'
						onChange={handleChangeFormValues}
						required
					/>
				</label>
			</div>
			<div>
				{' '}
				<label>
					Password:
					<input
						type='password'
						name='password'
						onChange={handleChangeFormValues}
						required
					/>
				</label>
			</div>

			<button type='submit'>Submit</button>
		</StyledForm>
	);
};

const handleSubmit = event => {
	event.preventDefault();
	console.log(event.target.name.value);
};

const handleChangeFormValues = () => {};

export default Form;
