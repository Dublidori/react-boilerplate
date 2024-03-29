const initialState = {
	login: true, // always true for now.
	token: '',
	refresh_token: '',
	expires_in: null,
	scopes: [],
	user: {},
};

export default function (state = initialState, action) {
	switch (action.type) {
		case 'LOGIN': {
			return {
				...state,
				login: action.payload.login,
				token: action.payload.token,
                user: action.payload.user
				// refresh_token: action.payload.refresh_token,
			};
		}
		default:
			return state;
	}
}