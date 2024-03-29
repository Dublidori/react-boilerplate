import { combineReducers } from 'redux';
import authReducer from './auth/authReducer'
// import { connectRouter } from 'connected-react-router'; Not using connectRouter due to incompabilities to React v18

const createRootReducer = () =>
	combineReducers({
		// router: connectRouter(history),
		auth: authReducer,
	});

export default createRootReducer;
