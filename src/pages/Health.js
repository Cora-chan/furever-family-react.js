import React from "react"

import ChartExample from"../components/ChartExample"
import SimpleHeader from"../components/Headers/SimpleHeader"
import SimpleBottomNavigation from "../components/SimpleBottomNavigation"
import SettingButton from "../components/Buttons/SettingButton"
import ListInHealth from "../components/Lists/ListInHealth"


function Health(){
    return(
<div>
        
        <SettingButton />
        <SimpleHeader caption="Health" />
        <ChartExample  />
        <ListInHealth />
        <SimpleBottomNavigation />
        
        
</div>


    )
}

export default Health