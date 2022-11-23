import { useMediaQuery } from "@mui/material"
import {LeftPanelWide, LeftPanelMobile} from "./LeftPanel"
import MainArea from "./MainArea"
import Topbar from "./Topbar"

const Layout = () => {
    
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))

    return(
        <div>
            <Topbar />
            <MainArea />
            { isMobile? <LeftPanelMobile /> : <LeftPanelWide /> }
            
        </div>
    )
}

export default Layout