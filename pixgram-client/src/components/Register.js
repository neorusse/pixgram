import React, { useState, useRef } from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail } from 'validator';

import AuthService from '../services/auth.service';

const required = (value) => {
	if (!value) {
		return (
			<div className="alert alert-danger" role="alert">
				This field is required!
			</div>
		);
	}
};

const vfirstname = (value) => {
	if (value.length < 2) {
		return (
			<div className="alert alert-danger" role="alert">
				Provided a valid first name.
			</div>
		);
	}
};

const vlastname = (value) => {
	if (value.length < 2) {
		return (
			<div className="alert alert-danger" role="alert">
				Provided a valid Last name.
			</div>
		);
	}
};

const validEmail = (value) => {
	if (!isEmail(value)) {
		return (
			<div className="alert alert-danger" role="alert">
				This is not a valid email.
			</div>
		);
	}
};

const vpassword = (value) => {
	if (value.length < 6 || value.length > 40) {
		return (
			<div className="alert alert-danger" role="alert">
				The password must be between 6 and 40 characters.
			</div>
		);
	}
};

const vconfirmpassword = (value) => {
	if (value.length < 6 || value.length > 40) {
		return (
			<div className="alert alert-danger" role="alert">
				Password and Confirm Password must match.
			</div>
		);
	}
};

const Register = (props) => {
	const form = useRef();
	const checkBtn = useRef();

	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmpassword, setConfirmpassword] = useState('');
	const [successful, setSuccessful] = useState(false);
	const [message, setMessage] = useState('');

	const onChangeFirstname = (e) => {
		const firstname = e.target.value;
		setFirstname(firstname);
	};

	const onChangeLastname = (e) => {
		const lastname = e.target.value;
		setLastname(lastname);
	};

	const onChangeEmail = (e) => {
		const email = e.target.value;
		setEmail(email);
	};

	const onChangePassword = (e) => {
		const password = e.target.value;
		setPassword(password);
	};

	const onChangeConfirmpassword = (e) => {
		const confirmpassword = e.target.value;
		setConfirmpassword(confirmpassword);
	};

	const handleRegister = (e) => {
		e.preventDefault();

		setMessage('');
		setSuccessful(false);

		form.current.validateAll();

		if (checkBtn.current.context._errors.length === 0) {
			AuthService.register(
				firstname,
				lastname,
				email,
				password,
				confirmpassword
			).then(
				(response) => {
					setMessage(response.data.message);
					setSuccessful(true);
					setTimeout(function () {
						props.history.push('/login');
						window.location.reload();
					}, 5000);
				},
				(error) => {
					const resMessage =
						(error.response &&
							error.response.data &&
							error.response.data.message) ||
						error.message ||
						error.toString();

					setMessage(resMessage);
					setSuccessful(false);
				}
			);
		}
	};

	return (
		<div className="col-md-12">
			<div className="card card-container">
				<img
					src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
					alt="profile-img"
					className="profile-img-card"
				/>

				<Form onSubmit={handleRegister} ref={form}>
					{!successful && (
						<div>
							<div className="form-group">
								<label htmlFor="firstname">First Name</label>
								<Input
									type="text"
									className="form-control"
									name="firstname"
									value={firstname}
									onChange={onChangeFirstname}
									validations={[required, vfirstname]}
								/>
							</div>

							<div className="form-group">
								<label htmlFor="lastname">Last Name</label>
								<Input
									type="text"
									className="form-control"
									name="lastname"
									value={lastname}
									onChange={onChangeLastname}
									validations={[required, vlastname]}
								/>
							</div>

							<div className="form-group">
								<label htmlFor="email">Email</label>
								<Input
									type="text"
									className="form-control"
									name="email"
									value={email}
									onChange={onChangeEmail}
									validations={[required, validEmail]}
								/>
							</div>

							<div className="form-group">
								<label htmlFor="password">Password</label>
								<Input
									type="password"
									className="form-control"
									name="password"
									value={password}
									onChange={onChangePassword}
									validations={[required, vpassword]}
								/>
							</div>

							<div className="form-group">
								<label htmlFor="confirmpassword">Confirm Password</label>
								<Input
									type="password"
									className="form-control"
									name="confirmpassword"
									value={confirmpassword}
									onChange={onChangeConfirmpassword}
									validations={[required, vconfirmpassword]}
								/>
							</div>

							<div className="form-group">
								<button className="btn btn-secondary btn-block">Sign Up</button>
							</div>
						</div>
					)}

					{message && (
						<div className="form-group">
							<div
								className={
									successful ? 'alert alert-success' : 'alert alert-danger'
								}
								role="alert"
							>
								{message}
							</div>
						</div>
					)}
					<CheckButton style={{ display: 'none' }} ref={checkBtn} />
				</Form>
			</div>
		</div>
	);
};

export default Register;
