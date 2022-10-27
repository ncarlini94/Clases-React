import React , {useContext} from 'react';
import MainContext from '../context/MainContext';

export default function Switch(props){

    const {isOn} = props;
    const {darkMode, switchDarkMode} = useContext(MainContext);

    function handleChange(e){
        switchDarkMode(e, darkMode);
    }

    console.log(darkMode)

    return(
        <>
            <span>🌝</span>
            <input checked={isOn} type="checkbox" onChange={handleChange}></input>
            <span>🌚</span>
        </>
    )
}