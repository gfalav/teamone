import { Box, Toolbar } from "@mui/material"
import logo from '../../../images/CGS TeamOne logo.png'
import { useRecoilValue } from "recoil"
import { drawerWidth } from "../../recoil/recoil"

const SideLogo = () => {

    const dw = useRecoilValue(drawerWidth)

    return(

        <Box sx={{
            display: 'flex', alignItems: 'center', justifyContent: "center"
        }}>
                <Box component='img'
                    src={logo}
                    alt="logo"
                    sx={{
                        height: 66
                    }} />
        </Box>
    )
}

export default SideLogo