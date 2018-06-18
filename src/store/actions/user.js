const logIn = (user) => ({
    type: 'LOG_IN',
    user
});

const logOut = () => ({
    type: 'LOG_OUT'
});

const edit = (user) => ({
    type: 'EDIT',
    user
});

export { logIn, logOut, edit };