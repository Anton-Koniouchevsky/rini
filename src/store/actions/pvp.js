const pvp = (pvp) => ({
    type: 'PVP',
    pvp,
});

const decline = () => ({
    type: 'DECLINE',
    pvp: {},
});

const accept = () => ({
    type: 'ACCEPT',
    pvp,
});

export { pvp, decline, accept };