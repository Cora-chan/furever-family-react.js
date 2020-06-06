import React from "react"



import ImageAvatar from "../components/ImageAvatar"
import SimpleBottomNavigation from "../components/SimpleBottomNavigation"
import SettingButton from "../components/SettingButton"
import ListDividers from "../components/Lists/ListDividers"

function Dashboard(){
    return(
<div>
        
        <SettingButton />
        <ImageAvatar />
        <ListDividers />
        <SimpleBottomNavigation />
        
        

</div>


    )
}

export default Dashboard
