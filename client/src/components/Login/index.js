import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { LOGIN } from '../../utils/mutations';
import { btnS, divWrapper1, divWrapper2, formDiv, h2, inputDiv } from './styles';

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
                    <h1 className='text-center text-6xl text-orange-400 my-4'
                    >
                        Happy Halloween
                        </h1>
                    <p className='text-center text-xl text-orange-400 my-2'>It appears you've found the secret 🎃</p>
                    <div className={divWrapper2}>
                        <h2 className={h2}>Login</h2>
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-2">
                                <label 
                                htmlFor="email" 
                                className={formDiv}
                                >Email address:
                                </label>
                                <input
                                    className={inputDiv}
                                    placeholder="youremail@test.com"
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
                                    placeholder="******"
                                    name="password"
                                    type="password"
                                    id="pwd"
                                    onChange={handleChange}
                                />
                            </div>
                            {error ? (
                                <div>
                                    <p className="error-text">The provided credentials are incorrect</p>
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