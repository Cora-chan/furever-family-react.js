import React from "react"
import{Link} from "react-router-dom"
import IconButtonBack from "../components/Buttons/IconButtonBack"
import AddPetsHeader from "../components/Headers/AddPetsHeader"
import ListInAddPets from "../components/Lists/ListInAddPets"

import ContainedButtonCancel from "../components/Buttons/ContainedButtonCancel"
import ContainedButtonMedium from "../components/Buttons/ContainedButtonMedium"

function AddPets(){
    return(
<div>
        
       
        
<ContainedButtonCancel color="error" caption="Cancel" component={Link}to="/manage/pets"  />
<ContainedButtonMedium color="green" caption="Save" component={Link}to="/manage/pets"  />


                
       
</div>


    )
}

export default AddPets
