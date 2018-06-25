const defaultCurrentUserState = {
  id: null,
  name: '',
  xp: 0,
  hero: 'cat',
  sounds: true,
  effects: true,
};

export default (state = defaultCurrentUserState, action) => {
  switch (action.type) {
    case 'LOG_IN': {
      return action.user;
    }
    case 'LOG_OUT': {
      return defaultCurrentUserState;
    }
    case 'EDIT': {
      return Object.assign({}, state, action.payload);
    }
    default:
      return state;
  }
};