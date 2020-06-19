import React from "react"
import ListInCare from "../components/Lists/ListInCare"
import SimpleHeader from "../components/Headers/SimpleHeader"
import SettingButton from "../components/Buttons/SettingButton"
import SimpleBottomNaviagtion from "../components/SimpleBottomNavigation"


function Care(){
    return(
<div>
        
        <SettingButton />
        <SimpleHeader caption="Care" />
        
        <ListInCare />
        <SimpleBottomNaviagtion />
        
        
        
</div>


    )
}

export default Care