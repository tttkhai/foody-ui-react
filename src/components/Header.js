import React from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { logout } from '../services/authService';
import { useDispatch } from 'react-redux';

const RightNavBar=()=>{
    const { auth } = useSelector(state=>({...state}));
    let dispatch=useDispatch();
    switch(auth) {
        case null:
            return;
        case false:
            return  <li><Link to='/login'> Login </Link></li>;
        default:
            return [
            <li key="1">Hello, {auth.first_name} {auth.last_name} </li>,
            <li key="2" 
                style={{margin: '0 10px'}}
                onClick={()=>{
                    logout();
                    dispatch({type: 'FETCH_USER', payload: null})
                }}
            > Logout </li>
            ]
    }
}

export const Header = ()=>{
    return(
        <nav>
            <div className="nav-wrapper">
                <Link 
                    style={{marginLeft: '10px'}}
                    to='/'
                    className="left brand-logo"
                >
                    Foody
                </Link>
                
                <ul className="right">
                {RightNavBar()}
                </ul>
            </div>
        </nav>
    )
}

