import React from "react";
import ManagePetsMedsGrid from "../components/Grids/ManagePetsGrid"
import ManageMedsHeader from "../components/Headers/ManageMedsHeader"
import BackButton from "../components/Buttons/ManageMedsButtons/BackButton"
import AddButton from "../components/Buttons/ManageMedsButtons/AddButton"
import CancelButton from "../components/Buttons/ManageMedsButtons/CancelButton"

function ManagePets(){
    return(
<div>
        <BackButton/>
        <ManageMedsHeader/>
        <ManagePetsMedsGrid/>
        <AddButton/>
        <CancelButton/>
  
</div>
    )
}

export default ManagePets
