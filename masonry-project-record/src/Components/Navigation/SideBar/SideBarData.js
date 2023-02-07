import React from "react";
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as FaIcons from 'react-icons/fa';


export const SideBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <IoIcons.IoIosConstruct/>,
        cName: 'nav-text',
    },
    {
        title: 'Contractors',
        path: '/',
        icon: <FaIcons.FaFileContract/>,
        cName: 'nav-text',
    },
]