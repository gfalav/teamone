import { IconButton } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import { useRecoilState } from "recoil"
import { mainMenuState } from "../../states/States"

const MainMenu = () => {
    const [menuState, setMenuState] = useRecoilState(mainMenuState)

    return(
        <IconButton onClick={() => setMenuState(!menuState) }>
            <MenuIcon sx={{color: 'white'}} />
        </IconButton>
    )
}

export default MainMenu