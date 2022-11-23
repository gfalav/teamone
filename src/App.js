import { ThemeProvider } from '@mui/material'
import theme from './comps/layout/Theme'
import './App.css'
import Layout from './comps/layout/Layout'
import { RecoilRoot } from 'recoil'

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Layout />  
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default App
