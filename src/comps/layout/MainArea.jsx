import { Container } from "@mui/system"
import { useRecoilValue } from "recoil"
import { drawerWidthState } from "../../states/States"

const MainArea = () => {

    return(
        <Container
            sx={{
                position: 'absolute',
                p: 0,
                top: '67px', 
                left: { sm: useRecoilValue(drawerWidthState)},
                width: { sm: `calc(100% - ${useRecoilValue(drawerWidthState)}px)` }
            }}>
            main area
        </Container>
    )
}

export default MainArea