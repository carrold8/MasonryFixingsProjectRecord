import React from 'react'
import CountyDropDown from './CountyDropDown'
import CountryDropDown from './CountryDropDown';
import EmployeeTypeDropDown from './EmployeeTypeDropDown';
import CompanyTypeDropDown from './CompanyTypeDropDown';
import AllCompaniesDropDown from './AllCompaniesDropDown';
import CompanyEmployees from './CompanyEmployees';
import CategoryDropDown from './CategoryDropDown';
import SectorDropDown from './SectorDropDown';
import FloorMaterialDropDown from './FloorMaterialDropDown';
import FrameMaterialDropDown from './FrameMaterialDropDown';
import EnvelopeMatrialsDropDown from './EnvelopeMaterialDropDown';
import RoofMatrialsDropDown from './RoofMaterialDropDown';
import PartitioningMatrialsDropDown from './PartitioningMaterialDropDown';
import UsersDropDown from './UsersDropDown';
import TaskDropDown from './TaskDropDown';
import TaskTypeDropDown from './TaskTypeDropDown';
import StageDropDown from './StageDropDown';
import CategorySectorsDropDown from './CategorySectorsDropDown';

export default function DropDown(props){

    return(
        <>
            {props.children}
        </>
    )
}

DropDown.AllCompanies = AllCompaniesDropDown;
DropDown.Category = CategoryDropDown;
DropDown.CategorySectors = CategorySectorsDropDown;
DropDown.CompanyEmployees = CompanyEmployees;
DropDown.CompanyType = CompanyTypeDropDown;
DropDown.County = CountyDropDown;
DropDown.Country = CountryDropDown;
DropDown.EmployeeType = EmployeeTypeDropDown;
DropDown.EnvelopeMaterial = EnvelopeMatrialsDropDown;
DropDown.FloorMaterial = FloorMaterialDropDown
DropDown.FrameMaterial = FrameMaterialDropDown;
DropDown.RoofMaterial = RoofMatrialsDropDown;
DropDown.PartitioningMaterial = PartitioningMatrialsDropDown;
DropDown.Sector = SectorDropDown;
DropDown.Stage = StageDropDown;
DropDown.Task = TaskDropDown;
DropDown.TaskType = TaskTypeDropDown;
DropDown.Users = UsersDropDown;