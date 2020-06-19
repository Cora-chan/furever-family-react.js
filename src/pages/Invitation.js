import React from "react"

import {Link} from "react-router-dom"
import IconButtonBack from "../components/Buttons/IconButtonBack"
import SimpleHeader from "../components/Headers/SimpleHeader"
import InviteFamilyNoteHeader from "../components/Headers/InviteFamilyNoteHeader"
import ContainedButtonCancel from "../components/Buttons/ContainedButtonCancel"
import ContainedButtonMedium from "../components/Buttons/ContainedButtonMedium"
import BasicTextField from "../components/Inputs/BasicTextField"

function Invitation(){
    return(
<div>
        
        <IconButtonBack component={Link}to="/health"/>
        <SimpleHeader caption="Invite to Family" />
        <BasicTextField label="Email" />
        <InviteFamilyNoteHeader />
        <ContainedButtonCancel color="error" caption="Cancel" component={Link}to="/settings"  />
        <ContainedButtonMedium color="green" caption="Send Invite" component={Link}to="/invite-success"  />
       
</div>

    )
}

export default Invitation

