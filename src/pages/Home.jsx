import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAction } from '../redux/auth/authActions';

const HomePage = () => {
    return (
        <div className="container">
            Home
        </div>
    );
};

export default HomePage;
