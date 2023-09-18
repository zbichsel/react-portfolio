import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { LOGIN } from '../../utils/mutations';
import { btnS, divWrapper1, divWrapper2, formDiv, h2, h2p, h2plink, hmessage, inputDiv, message } from './styles';

function Login(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: { email: formState.email, password: formState.password },
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);

        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    function showLogin() {

        if (Auth.loggedIn()) {
            return <Navigate to="/" />
        } else {
            return (
                <div className={divWrapper1}>
                    <h1 className={hmessage}
                    >
                        Happy Halloween
                    </h1>
                    <p className={message}>
                        It appears you've found the secret 🎃
                    </p>
                    <div className={divWrapper2}>
                        <h2 className={h2}>Login</h2>
                        <p className={h2p}>
                            Don't have an account?
                            <Link
                                to="/signup"
                                className={h2plink}
                            >
                                Signup
                            </Link>
                        </p>
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-2">
                                <label
                                    htmlFor="email"
                                    className={formDiv}
                                >Email address:
                                </label>
                                <input
                                    className={inputDiv}
                                    placeholder="michaelmyers@haddonfield.com"
                                    name="email"
                                    type="email"
                                    id="email"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-2">
                                <label
                                    htmlFor="pwd"
                                    className={formDiv}
                                >Password:
                                </label>
                                <input
                                    className={inputDiv}
                                    placeholder="••••••••"
                                    name="password"
                                    type="password"
                                    id="pwd"
                                    onChange={handleChange}
                                />
                            </div>
                            {error ? (
                                <div>
                                    <p className="error-text text-red-600">The provided credentials are incorrect</p>
                                </div>
                            ) : null}
                            <div className={btnS}>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            );
        }
    }

    return (
        <div>
            {showLogin()}
        </div>
    )

}

export default Login;