import React from "react";
import FloorMaterialMaintenance from "./FloorMaterialMaintenance/FloorMaterialMaintenance";
import FrameMaterialMaintenance from "./FrameMaterialMaintenance/FrameMaterialMaintenance";
import EnvelopeMaterialMaintenance from "./EnvelopeMaterialMaintenance/EnvelopeMaterialMaintenance";
import PartitioningMaterialMaintenance from "./PartitioningMaterialMaintencance/PartitioningMaterialMaintencance";
import RoofMaterialMaintenance from "./RoofMaterialMaintenance/RoofMaterialMaintenance";
import { Card } from "react-bootstrap";


export default function MaterialsMaintenance(){

    return(
        <div>
            <Card>
                <Card.Header>
                    <strong>Materials Maintenance</strong>
                </Card.Header>
                <Card.Body>
                    <FrameMaterialMaintenance/>
                    <FloorMaterialMaintenance/>
                    <EnvelopeMaterialMaintenance/>
                    <PartitioningMaterialMaintenance/>
                    <RoofMaterialMaintenance/>
                </Card.Body>
            </Card>
            
        </div>
    )
}