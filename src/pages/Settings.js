import React from "react"
import ListInSettings from "../components/Lists/ListInSettings"
import SettingsHeader from "../components/Headers/SettingsHeader"
import SettingButton from "../components/SettingButton"
import SimpleBottomNaviagtion from "../components/SimpleBottomNavigation"


function Settings(){
    return(
<div>
        
        <SettingButton />
        <SettingsHeader />
        
        <ListInSettings />
        <SimpleBottomNaviagtion />
        
        
        
</div>


    )
}

export default Settings