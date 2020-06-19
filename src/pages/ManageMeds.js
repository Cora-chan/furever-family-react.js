import React from "react";
import IconButtonBack from "../components/Buttons/IconButtonBack"
import {Link} from "react-router-dom"
import ManagePetsMedsGrid from "../components/Grids/ManagePetsGrid"
import SimpleHeader from "../components/Headers/SimpleHeader"
import ContainedButtonCancel from "../components/Buttons/ContainedButtonCancel"
import ContainedButtonMedium from "../components/Buttons/ContainedButtonMedium"

function ManagePets(){
    return(
<div>
        <IconButtonBack component={Link}to="/health"/>
        <SimpleHeader caption="Manage Pets"/>
        <ManagePetsMedsGrid/>
        <ContainedButtonCancel color="error" caption="Cancel" component={Link}to="/health"  />
        <ContainedButtonMedium color="green" caption="Add" component={Link}to="/health"  />
  
</div>
    )
}

export default ManagePets
