const defaultPVPState = {
  user1: null,
  user1Name: null,
  user2: null,
  user2Name: null,
  isAccepted: false,
};

export default (state = defaultPVPState, action) => {
  switch (action.type) {
    case 'PVP': {
      return action.pvp;
    }
    case 'DECLINE': {
      return {};
    }
    case 'ACCEPT': {
      return Object.assign({}, action.pvp, {isAccepted: true});
    }
    default:
      return state;
  }
};