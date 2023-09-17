import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';

import { divWrapper1, divWrapper2, formDiv, inputDiv, h2, btnS } from './styles';

export default function Signup(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser({
            variables: {
                email: formState.email,
                password: formState.password,
                firstName: formState.firstName,
                lastName: formState.lastName,
            },
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div className={divWrapper1}>
            <div className={divWrapper2}
            >
                <div>
                    <h2 className={h2}
                    >Signup
                    </h2>
                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-2">
                            <label
                                htmlFor="firstName"
                                className={formDiv}
                            >First Name:
                            </label>
                            <input
                                placeholder="Michael"
                                name="firstName"
                                type="firstName"
                                id="firstName"
                                onChange={handleChange}
                                className={inputDiv}
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="lastName"
                                className={formDiv}
                            >Last Name:
                            </label>
                            <input
                                placeholder="Myers"
                                name="lastName"
                                type="lastName"
                                id="lastName"
                                onChange={handleChange}
                                className={inputDiv}
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="email"
                                className={formDiv}
                            >Email:
                            </label>
                            <input
                                placeholder="michaelmyers@haddonfield.com"
                                name="email"
                                type="email"
                                id="email"
                                onChange={handleChange}
                                className={inputDiv}
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="pwd"
                                className={formDiv}
                            >Password:
                            </label>
                            <input
                                placeholder="******"
                                name="password"
                                type="password"
                                id="pwd"
                                onChange={handleChange}
                                className={inputDiv}
                            />
                        </div>
                        <div className={btnS}>
                            <button
                                type="submit"
                            >SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
