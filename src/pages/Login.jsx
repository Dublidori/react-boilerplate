import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAction } from '../redux/auth/authActions';

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // state from store
    const loginSuccess = useSelector(state => state.auth.login);

    // component state
    const [loginData, setLoginData] = React.useState({
        username: '',
        password: ''
    });

    useEffect(() => {
        if (loginSuccess) {
            navigate('/');
            setLoginData({
                username: '',
                password: ''
            });
        }
    }, [loginSuccess]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setLoginData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleLogin = (event) => {
        event.preventDefault();
        // Old version using auth.js
        // login(loginData)
        //     .then(userData => {
        //         //TODO receive the token save it globally between the application and encrypt it
        //         console.log(userData);
        //         navigate('/lobby');
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });

        // New version using redux dispatch
        dispatch(LoginAction(loginData));
    };

    return (
        <div className="container">
            <div className="column text-column">
                <h2>Dev System</h2>
                <p>
                    <strong>DEVSYSTEM:</strong> The Ultimate Portal for Developers.<br /><br />
                    With DEVSYSTEM, you're not just accessing a network; you're entering a world of
                    endless possibilities where collaborative development takes the front seat. Here,
                    you can find your next big project, team up with like-minded
                    coders, and contribute to innovative solutions that shape the
                    future of technology.<br />
                    Embrace the power of collaboration and join DEVSYSTEM where
                    development happens together.
                </p>
            </div>

            <div className="column login-column">
                <div className="loginTitle">Log in</div>

                <div>DevSystem</div>
                <form onsubmit="return false;">
                    <input
                        type="text"
                        id="username"
                        name="username"
                        required
                        placeholder="Username"
                        value={loginData.username}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        placeholder="Password"
                        value={loginData.password}
                        onChange={handleChange}
                    />
                    <button onClick={handleLogin}>Login</button>
                    <div className="signUpandForgetPassword">
                        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/register">Don't have an account yet? SignUp</Link>
                    </div>
                    <div className="signUpandForgetPassword">
                        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/forgotpassword">Forgot password?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
