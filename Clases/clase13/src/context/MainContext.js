import React from 'react';

const defaultState = {
    darkMode : false,
    color: 10000
};

const MainContext = React.createContext(defaultState);

export default MainContext;