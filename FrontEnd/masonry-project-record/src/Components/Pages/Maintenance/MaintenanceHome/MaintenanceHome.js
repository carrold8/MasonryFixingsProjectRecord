import React, { useState } from "react";
import UserMaintenance from "./UserMaintenance/UserMaintenance";
import CategorySectorMaintenance from "./CategorySectorMaintenance/CategorySectorMaintenance";
// import CompanyTypeMaintenance from "./CompanyTypeMaintenance/CompanyTypeMaintenance";
import MaterialsMaintenance from "./MaterialsMaintenance/MaterialsMaintenance";
// import EmployeeTypeMaintenance from "./EmployeeTypeMaintenance/EmployeeTypeMaintenance";
import TaskMaintenance from "./TaskMaintenance/TaskMaintenance";
import './MaintenanceHome.css';
import ProductMaintenance from "./ProductMaintenance/ProductMaintenance";

function MaintenaceHome(){

    const [currentTab, setCurrentTab] = useState(0);

    const HeaderArray = [
        "Users",
        "Category",
        // "Company Type",
        "Materials",
        // "Employee Types",
        "Tasks",
        "Products"
    ]

    const MaintenanceArray = [
        <UserMaintenance />,
        <CategorySectorMaintenance/>,
        // <CompanyTypeMaintenance/>,
        <MaterialsMaintenance/>,
        // <EmployeeTypeMaintenance/>,
        <TaskMaintenance/>,
        <ProductMaintenance/>
    ] 

    return(
        <div>
            <div className="maintenance-selection-container">
                <div className="body">
                    {
                        HeaderArray.map((item, index) =>{
                            return(
                                <div 
                                    key={index} 
                                    onClick={() => setCurrentTab(index)}
                                    className={index === currentTab ? 'selected' : ''}
                                >
                                    <strong>{item}</strong>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


            <div className="maintenance-container">
                {MaintenanceArray[currentTab]}
            </div>
            
            

        </div>
    )

}
export default MaintenaceHome;