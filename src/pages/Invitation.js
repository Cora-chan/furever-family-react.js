import React from "react"
import BackButton from "../components/Buttons/InvitationButtons/BackButton"
import EmailTextField from "../components/Inputs/EmailTextField"
import InviteFamilyHeader from "../components/Headers/InviteFamilyHeader"
import InviteFamilyNoteHeader from "../components/Headers/InviteFamilyNoteHeader"
import SendButton from "../components/Buttons/InvitationButtons/SendButton"
import CancelButton from "../components/Buttons/InvitationButtons/CancelButton"


function Invitation(){
    return(
<div>
        
        <BackButton />
        <InviteFamilyHeader />
        <EmailTextField />
        <InviteFamilyNoteHeader />
        <SendButton />
        <CancelButton />
       
</div>


    )
}

export default Invitation

