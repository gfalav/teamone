import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import User from "./User"
import { useRecoilState, useRecoilValue } from "recoil"
import { drawerWidth, toggleMenu } from "../../recoil/recoil"

const Topbar = () => {
    const dw = useRecoilValue(drawerWidth)
    const [tMenu, setTMenu] = useRecoilState(toggleMenu)

    return(
        <Box>
            <AppBar position='fixed'
                    sx={{
                        width: { sm: `calc(100% - ${dw}px)` },
                        ml: { sm: `${dw}px` },
                        backgroundColor: '#ebebeb',
                        color: 'black'
                    }}>
                <Toolbar>
                    <IconButton size="large" color="inherit" 
                                onClick={() => setTMenu(!tMenu)} 
                                sx={{ mr: 2, display: {sm: 'none'} }}>
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ flexGrow: 1}} />
                    <User />
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Topbar