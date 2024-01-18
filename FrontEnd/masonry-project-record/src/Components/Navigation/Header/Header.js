import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './Header.css';
import { TiGroup } from "react-icons/ti";
import { BsPersonCircle } from "react-icons/bs";
import { MdHome, MdConstruction, MdSettings } from "react-icons/md";
import Logo from '../../../Resources/Images/MF_IconOrange.png';
import UserTypeAPIs from '../../../MasonyFixingsAPIs/UserTypeAPIs/UserTypeAPIs';
import AuthenticateAPIs from '../../../MasonyFixingsAPIs/AuthenticateAPIs/AuthenticateAPIs';

function Header(){
    
    const navigate = useNavigate();
    const [management, setManagement] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const getUserType = () => {
        UserTypeAPIs.GetUserType()
        .then((response) => {
            if(response.status === 200){
                setManagement(true);
            }
        })
        .catch((err) => {
            console.log(err);
            if(err.response.status === 401){
                if(err.response.data.logout){
                    navigate('/login');
                }
            }
        })
    }

    

    const logout = () => {
        AuthenticateAPIs.GetLogout()
        .then((response) => {
            if(response.status === 200){
                navigate('/login');
            }
        })
        .catch((err) => {
            console.log(err);
            if(err.response.status === 401){
                if(err.response.data.logout){
                    navigate('/login');
                }
            }
        })
        
    }

    useEffect(() => {
        getUserType()
    }, []);

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
            {management && <div onClick={() => navigate('/maintenance')} className='nav-item'>
                <h5><MdSettings/></h5> <strong>Maintenance</strong>
            </div>}
            <div onClick={() => setShowMenu(!showMenu)} className='nav-item'>
                <h5 ><BsPersonCircle/></h5>
                <div className={showMenu ? 'account-menu active' : 'account-menu'}>
                    <div className='option' onClick={() => navigate('/my-account')} >My Account</div>
                    <div className='option' onClick={() => logout()}>Logout</div>
                </div>
            </div>
        </div>
    );
}
export default Header;