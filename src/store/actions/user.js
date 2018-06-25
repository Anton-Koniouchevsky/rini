const logIn = (user) => ({
    type: 'LOG_IN',
    user
});

const logOut = () => ({
    type: 'LOG_OUT'
});

const edit = (payload) => ({
    type: 'EDIT',
    payload
});

export { logIn, logOut, edit };