import React from 'react';

const defaultState = {
    darkMode : false
};

const MainContext = React.createContext(defaultState);

export default MainContext;