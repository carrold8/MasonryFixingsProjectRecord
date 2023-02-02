import React from "react";
import * as AiIcons from 'react-icons/ai';


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
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text',
        children: [
            {
                title: 'Test child',
                path: '/projects',
                cName: 'nav-text'
            },
            {
                title: 'Test two',
                path: '/projects',
                cName: 'nav-text'
            }
        ]
    }
]