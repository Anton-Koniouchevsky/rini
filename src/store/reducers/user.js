const defaultCurrentUserState = {
  id: null,
  name: '',
  email: '',
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
      return action.user;
    }
    default:
      return state;
  }
};