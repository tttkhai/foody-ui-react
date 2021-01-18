import React from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';


const renderContent=()=>{
    const { auth } = useSelector(state=>({...state}));
    switch({auth}) {
        case null:
            return;
        case false:
            return <li><Link to='/login'> Login </Link></li>
        default:
            return [
            <li key="1">Hello {auth.first_name} {auth.last_name}</li>,
            <li key="2"><Link to='/logout'> Logout </Link></li>
            ]
    }
}

export const Header = ()=>{
    return(
        <nav>
            <div className="nav-wrapper">
                <Link 
                    to='/'
                    className="left brand-logo"
                >
                    Foody
                </Link>
                
                <ul className="right">
                {renderContent()}
                </ul>
            </div>
        </nav>
    )
    
    
}