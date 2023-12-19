import React from 'react';
import {useNavigate} from 'react-router-dom'
import './Header.css';
import { TiGroup } from "react-icons/ti";
import { MdHome, MdConstruction, MdSettings } from "react-icons/md";
import Logo from '../../../Resources/Images/MF_IconOrange.png';

function Header(){
    
    const navigate = useNavigate();

    return(
        <div className={"header-row"}>
            <div className='logo'>
                <img  src={Logo} alt='Logo' />
                <h4> <strong>Masonry Fixings</strong></h4>
            </div>
            <div onClick={() => navigate('/')} className='nav-item'>
                <h5><MdHome/></h5> <strong>Home</strong>
            </div>
            <div onClick={() => navigate('/project')} className='nav-item'>
                <h5><MdConstruction/></h5> <strong>Projects</strong>
            </div>
            <div onClick={() => navigate('/companies')} className='nav-item'>
                <h5><TiGroup/></h5> <strong>Companies</strong>
            </div>
            <div onClick={() => navigate('/maintenance')} className='nav-item'>
                <h5><MdSettings/></h5> <strong>Maintenance</strong>
            </div>
        </div>
    );
}
export default Header;