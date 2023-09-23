import React from 'react'
import CountyDropDown from './CountyDropDown'
import CountryDropDown from './CountryDropDown';
import EmployeeTypeDropDown from './EmployeeTypeDropDown';
import CompanyTypeDropDown from './CompanyTypeDropDown';

export default function DropDown(props){

    return(
        <>
            {props.children}
        </>
    )
}

DropDown.County = CountyDropDown;
DropDown.Country = CountryDropDown;
DropDown.EmployeeType = EmployeeTypeDropDown;
DropDown.CompanyType = CompanyTypeDropDown;