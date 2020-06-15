import React from "react"
import ListInCare from "../components/Lists/ListInCare"
import CareHeader from "../components/Headers/CareHeader"
import SettingButton from "../components/Buttons/SettingButton"
import SimpleBottomNaviagtion from "../components/SimpleBottomNavigation"


function Care(){
    return(
<div>
        
        <SettingButton />
        <CareHeader />
        
        <ListInCare />
        <SimpleBottomNaviagtion />
        
        
        
</div>


    )
}

export default Care