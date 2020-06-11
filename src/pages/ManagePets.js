import React from "react";
import ManagePetsMedsGrid from "../components/Grids/ManagePetsGrid"
import ManagePetsHeader from "../components/Headers/ManagePetsHeader"
import BackButton from "../components/Buttons/InvitationButtons/BackButton"
import AddButton from "../components/Buttons/ManagePetsButtons/AddButton"
import CancelButton from "../components/Buttons/ManagePetsButtons/CancelButton"

function ManagePets(){
    return(
<div>
        <BackButton/>
        <ManagePetsHeader/>
        <ManagePetsMedsGrid/>
        <AddButton/>
        <CancelButton/>
  
     
</div>


    )
}

export default ManagePets
