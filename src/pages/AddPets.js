import React from "react"
import{Link} from "react-router-dom"
import IconButtonBack from "../components/Buttons/IconButtonBack"
import SimpleHeader from "../components/Headers/SimpleHeader"
import BasicTextField from "../components/Inputs/BasicTextField"
import BreedSelect from "../components/Inputs/BreedSelect"
import DateOfBirthPicker from "../components/Inputs/DateOfBirthPicker"
import ContainedButtonCancel from "../components/Buttons/ContainedButtonCancel"
import ContainedButtonMedium from "../components/Buttons/ContainedButtonMedium"

function AddPets(){
    return(
<div>
<IconButtonBack component={Link}to="/manage/pets"/>   
<SimpleHeader caption="Add Pets"/>         
<BasicTextField label="Name" />

<BreedSelect/>
<DateOfBirthPicker/>

<ContainedButtonCancel color="error" caption="Cancel" component={Link}to="/manage/pets"  />
<ContainedButtonMedium color="green" caption="Save" component={Link}to="/manage/pets"  />


                
       
</div>


    )
}

export default AddPets
