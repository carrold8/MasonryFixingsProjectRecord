import React, { useState } from "react";
import {Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SideBarData } from "./SideBarData";
import './Sidebar.css'
import {Row, Col} from 'react-bootstrap';
import SideBarItem from "./SideBarItem";

function SideBar(){

    const [showSideBar, setShowSideBar] = useState(false);

    return(

        <>
            <div className={showSideBar ? 'nav-menu active' : 'nav-menu'}>

                <div className={'nav-menu-items'}>

                    {showSideBar ? 
                    <Row>
                        <Col sm={8}>
                            <h1 className={showSideBar ? 'nav-header active' : 'nav-header'}>Title</h1>
                        </Col>
                        <Col sm={4}>
                            <Link to={'#'} className={showSideBar ? 'menu-toggle active' : 'menu-toggle'} onClick={() => setShowSideBar(!showSideBar)}>
                                <AiIcons.AiFillLeftCircle onClick={() => setShowSideBar(!showSideBar)}/>
                            </Link>
                        </Col>
                    </Row>
                    :
                    <Link to={'#'} className={showSideBar ? 'menu-toggle active' : 'menu-toggle'} onClick={() => setShowSideBar(!showSideBar)}>
                                <FaBars onClick={() => setShowSideBar(!showSideBar)}/>
                            </Link>
                    }

                    {SideBarData.map((item, index) => {

                        if(showSideBar){
                            return(
                                <SideBarItem key={index} item={item}/>
                            )
                        }
                        else{
                            return(
                                <li key={index} className={'nav-text'}>
                                    <Link to={item.path}>
                                        {item.icon}
                                    </Link>
                                </li>
                            )
                        }
                    })}

                </div>
            </div>
        </>

    );
}
export default SideBar;