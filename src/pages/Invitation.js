import React from "react"

import {Link} from "react-router-dom"
import IconButtonBack from "../components/Buttons/IconButtonBack"
import EmailTextField from "../components/Inputs/EmailTextField"
import InviteFamilyHeader from "../components/Headers/InviteFamilyHeader"
import InviteFamilyNoteHeader from "../components/Headers/InviteFamilyNoteHeader"
import ContainedButtonCancel from "../components/Buttons/ContainedButtonCancel"
import ContainedButtonMedium from "../components/Buttons/ContainedButtonMedium"

function Invitation(){
    return(
<div>
        
        <IconButtonBack component={Link}to="/health"/>
        <InviteFamilyHeader />
        <EmailTextField />
        <InviteFamilyNoteHeader />
        <ContainedButtonCancel color="error" caption="Cancel" component={Link}to="/settings"  />
        <ContainedButtonMedium color="green" caption="Send Invite" component={Link}to="/invite-success"  />
       
</div>


    )
}

export default Invitation

