import { AppBar, Avatar, IconButton, Toolbar, Typography, useMediaQuery } from "@mui/material"
import { useRecoilValue } from "recoil"
import { drawerWidthState, userLogged } from "../../states/States"
import MainMenu from "./MainMenu"

const Topbar = () => {
    
    const drawerWidth = useRecoilValue(drawerWidthState)
    const userLog = useRecoilValue(userLogged)
    
    var matches = userLog.match(/\b(\w)/g)
    var acronym = matches.join('')
    
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))

    return(
        <AppBar 
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${useRecoilValue(drawerWidthState)}px)` },
                ml: { sm: `${drawerWidth}px` },
                backgroundColor: '#ebebeb',
                color: 'black'
                }}>
            <Toolbar>
                {isMobile && <MainMenu />}
                <Typography sx={{
                    pl: 2,
                    flexGrow: 1}}>
                    TeamOne
                </Typography>
                <IconButton>
                    <Avatar sx={{ bgcolor: '#ac4ecf' }}>{acronym}</Avatar>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Topbar