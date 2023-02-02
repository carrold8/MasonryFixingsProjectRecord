import React from "react";
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import './Breadcrumbs.css';
import {Link, useLocation} from 'react-router-dom';
import { routesList } from "./Breadcrumbroutes";


function Breadcrumbs(){

    const breadcrumbs = useBreadcrumbs(routesList);
    const location = useLocation();
    return(
        <div align={'start'}>
            {breadcrumbs.map(({match, breadcrumb}) => (
                <Link
                    key={match.pathname}
                    to={match.pathname}
                    className={match.pathname === location.pathname ? "breadcrumb-active" : "breadcrumb-not-active"}>{breadcrumb} 

                </Link>
            ))}
        </div>
    );
}
export default Breadcrumbs;