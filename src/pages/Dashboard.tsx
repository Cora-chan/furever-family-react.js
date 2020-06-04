import React from "react"

import ImageAvater from "../components/ImageAvater"
import SimpleBottomNavigation from "../components/SimpleBottomNavigation"
import SettingButton from "../components/SettingButton"
import ListDividers from "../components/ListDividers"

function Dashboard(){
    return(
<div>
        
        <SettingButton />
        <ImageAvater />
        <ListDividers />
        <SimpleBottomNavigation />
        
        

</div>


    )
}

export default Dashboard
