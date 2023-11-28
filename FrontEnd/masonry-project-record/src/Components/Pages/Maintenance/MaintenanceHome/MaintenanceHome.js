import React, { useState } from "react";
import UserMaintenance from "./UserMaintenance/UserMaintenance";
import CategorySectorMaintenance from "./CategorySectorMaintenance/CategorySectorMaintenance";
import CompanyTypeMaintenance from "./CompanyTypeMaintenance/CompanyTypeMaintenance";
import MaterialsMaintenance from "./MaterialsMaintenance/MaterialsMaintenance";
import EmployeeTypeMaintenance from "./EmployeeTypeMaintenance/EmployeeTypeMaintenance";
import TaskMaintenance from "./TaskMaintenance/TaskMaintenance";

function MaintenaceHome(){

    const [currentTab, setCurrentTab] = useState(0);

    const MaintenanceArray = [
        <UserMaintenance />,
        <CategorySectorMaintenance/>,
        <CompanyTypeMaintenance/>,
        <MaterialsMaintenance/>,
        <EmployeeTypeMaintenance/>,
        <TaskMaintenance/>
    ] 

    return(
        <div>
            <select value={currentTab} onChange={(e) => setCurrentTab(e.target.value)}>
                <option value={0}>Users</option>
                <option value={1}>Category and Sector</option>
                <option value={2}>Company Type</option>
                <option value={3}>Materials</option>
                <option value={4}>Employee Type</option>
                <option value={5}>Tasks</option>
            </select>


            <div style={{padding: '1rem'}}>
                {MaintenanceArray[currentTab]}
            </div>
            
            

        </div>
    )

}
export default MaintenaceHome;