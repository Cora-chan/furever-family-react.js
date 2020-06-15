import React from "react";
import ManagePetsMedsGrid from "../components/Grids/ManagePetsGrid"
import {Link} from "react-router-dom"
import IconButtonBack from "../components/Buttons/IconButtonBack"
import ManagePetsHeader from "../components/Headers/ManagePetsHeader"
import ContainedButtonCancel from "../components/Buttons/ContainedButtonCancel"
import ContainedButtonMedium from "../components/Buttons/ContainedButtonMedium"

function ManagePets(){
    return(
<div>
        <IconButtonBack component={Link}to="/settings"/>
        <ManagePetsHeader/>
        <ManagePetsMedsGrid/>
        <ContainedButtonCancel color="error" caption="Cancel" component={Link}to="/settings"  />
        <ContainedButtonMedium color="green" caption="Add" component={Link}to="/add/pets"  />
  
</div>
    )
}

export default ManagePets
