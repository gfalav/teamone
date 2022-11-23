import { Drawer } from "@mui/material"
import { useRecoilState, useRecoilValue } from "recoil"
import { drawerWidthState } from "../../states/States"
import { mainMenuState } from "../../states/States"

export const LeftPanelWide = () => {

    return(
        <Drawer
            variant='persistent'
            anchor="left"
            open
            sx={{
               '& .MuiDrawer-paper': { boxSizing: 'border-box', 
                    width: useRecoilValue(drawerWidthState), 
                    backgroundColor: '#233044',
                    color: '#b8b8b8' 
                    },
                }}>
            Drawer width
        </Drawer>
    )
}

export const LeftPanelMobile = () => {
    const [menuState, setMenuState] = useRecoilState(mainMenuState)

    return(
        <Drawer
            variant='temporary'
            anchor="left"
            open={menuState}
            onClose={() => setMenuState(!menuState)}
            sx={{
                '& .MuiDrawer-paper': { boxSizing: 'border-box', 
                    width: useRecoilValue(drawerWidthState), 
                    backgroundColor: '#233044',
                    color: '#b8b8b8' 
                    },
            }}>
            Drawer mobile
        </Drawer>
    )
}
