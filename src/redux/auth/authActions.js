import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

export const LoginAction = (userData) => (dispatch) => {
    if(!userData){
        return;
    }

	axios.post(API_BASE_URL + `/login`, userData )
		.then((res) => {
            if(res.data){
                return dispatch({
                    type: 'LOGIN',
                    payload: {
                        login: true,
                        token: res.data.token,
                        user: res.data.user,
                    },
                });
            }

            return dispatch({
                type: 'LOGIN',
                payload: {
                    login: false,
                    token: '',
                    user: '',
                },
            });
		})

		.catch((err) => {
			console.log(err);
		});
};