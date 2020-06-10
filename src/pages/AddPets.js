import React from "react"
import BackButton from "../components/Buttons/AddingPetsButtons/BackButton"
import AddPetsHeader from "../components/Headers/AddPetsHeader"
import ListInAddPets from "../components/Lists/ListInAddPets"
import SaveButton from "../components/Buttons/AddingPetsButtons/SaveButton"
import CancelButton from "../components/Buttons/AddingPetsButtons/CancelButton"

function AddPets(){
    return(
<div>
        
        <BackButton />
        <AddPetsHeader />
        <ListInAddPets />
        <SaveButton />
        <CancelButton />
       
</div>


    )
}

export default AddPets
