import React from "react"
import ListInSettings from "../components/Lists/ListInSettings"
import SimpleHeader from "../components/Headers/SimpleHeader"
import SettingButton from "../components/Buttons/SettingButton"
import SimpleBottomNaviagtion from "../components/SimpleBottomNavigation"


function Settings(){
    return(
<div>
        
        <SettingButton />
        <SimpleHeader caption="Settings" />  
        <ListInSettings />
        <SimpleBottomNaviagtion />
        
        
        
</div>


    )
}

export default Settings