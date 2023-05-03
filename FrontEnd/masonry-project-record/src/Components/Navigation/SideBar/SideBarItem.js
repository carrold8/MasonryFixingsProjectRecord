import React, { useState } from "react";
import './Sidebar.css';
import {Link} from 'react-router-dom';
import {FiChevronDown} from 'react-icons/fi';

function SideBarItem({item}){

    const [subMenu, setSubMenu] = useState(false);
    const showSubMenu = () => {
        setSubMenu(!subMenu);
    }

    if(item.children){
        return(
            <div key={item.index}>
                <li className="nav-text active">
                    <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                    </Link>
                    <FiChevronDown className={subMenu ? "drop-down-icon-flipped" : 'drop-down-icon'} onClick={showSubMenu}/>
                </li>

                <div className={subMenu ? 'sub-menu active' : 'sub-menu'}>
                    {item.children.map((child, index) => <SideBarItem key={index} item={child}/>)}
                </div>
            </div>
        )
    }

    else{
        return(
            <div key={item.index}>
                <li className="nav-text active">
                    <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                    </Link>
                </li>
            </div>
        )
    }
}
export default SideBarItem;