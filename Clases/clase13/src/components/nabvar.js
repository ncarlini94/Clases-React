import React , { Component } from 'react';
import Switch from './switch';
import MainContext from '../context/MainContext';
import './navbar.css';


function ProfileColor(){
    const { darkMode } = React.useContext(MainContext);
    const style = darkMode ? 'dark' : 'light' ;
    return(
        <>
            <div className={style}>
            Nico
            </div>
        </>
    )
}

export default class Navbar extends Component {
    constructor(props){
        super();
        console.log("Contruyendo el Navbar..")
    }

    render(){
        return(
            <>
            <Switch/>
            <ProfileColor/>
            </>
        )
    }

    componentDidUpdate(){
        console.log("ComponentDidUpdate")
    }


    getSnapshotBeforeUpdate(nextProps, nextState){
        console.log("Esto esta por suceder")
    }

}