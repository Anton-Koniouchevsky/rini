import { combineReducers, createStore } from 'redux';
import userReducer from './reducers/user';

export default () => createStore(combineReducers({
    currentUser: userReducer,
}));

const mapCurrentUserToProps = (state, props) => ({
    currentUser: state.currentUser,
})

export { mapCurrentUserToProps };