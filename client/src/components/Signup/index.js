import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';
import logo from '../../images/logo.png';

import { divWrapper1, divWrapper2, formDiv, inputDiv, btnS, h2p, h2plink } from './styles';

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
                    <img src={logo} alt="logo" className='h-24 w-24 mx-auto' />
                    <p className={h2p}>
                        Already have an account?
                        <Link
                            to="/login"
                            className={h2plink}
                        >
                            login
                        </Link>
                    </p>
                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-2">
                            <label
                                htmlFor="firstName"
                                className={formDiv}
                            >First Name:
                            </label>
                            <input
                                placeholder="Samuel"
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
                                placeholder="Loomis"
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
                            >Email address:
                            </label>
                            <input
                                placeholder="loomis.sam@gmail.com"
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
                                placeholder="••••••••"
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
                            >Signup
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
