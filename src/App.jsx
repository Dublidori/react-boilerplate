import React, { useEffect } from 'react';
import Layout from './components/Layout'
import HomePage from './pages/Home';
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function App() {
    const navigate = useNavigate();
    const loginSuccess = useSelector(state => state.auth.login);

    useEffect(() => {
        if(loginSuccess){
            navigate('/');
        } else {
            navigate('/login');
        }
    }, [loginSuccess, navigate]);

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<HomePage />} />
                    {/* If you have other routes, they should be added here */}
                </Route>
            </Routes>
        </>
    );
}

export default App;
