import React from "react";
import FloorMaterialMaintenance from "./FloorMaterialMaintenance/FloorMaterialMaintenance";
import FrameMaterialMaintenance from "./FrameMaterialMaintenance/FrameMaterialMaintenance";
import EnvelopeMaterialMaintenance from "./EnvelopeMaterialMaintenance/EnvelopeMaterialMaintenance";
import PartitioningMaterialMaintenance from "./PartitioningMaterialMaintencance/PartitioningMaterialMaintencance";
import RoofMaterialMaintenance from "./RoofMaterialMaintenance/RoofMaterialMaintenance";


export default function MaterialsMaintenance(){

    return(
        <div>
            <div>Materials</div>
            <FrameMaterialMaintenance/>
            <FloorMaterialMaintenance/>
            <EnvelopeMaterialMaintenance/>
            <PartitioningMaterialMaintenance/>
            <RoofMaterialMaintenance/>
        </div>
    )
}