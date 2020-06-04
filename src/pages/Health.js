import React from "react"
import ChartExample from"../components/ChartExample"
import SimpleHeader from"../components/SimpleHeader"
import SimpleBottomNavigation from "../components/SimpleBottomNavigation"
import SettingButton from "../components/SettingButton"
import ListInHealth from "../components/ListInHealth"


function Health(){
    return(
<div>
        
        <SettingButton />
        <SimpleHeader />
        <ChartExample />
        <ListInHealth />
        <SimpleBottomNavigation />
        
        
</div>


    )
}

export default Health