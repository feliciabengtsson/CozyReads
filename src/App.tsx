import styled from 'styled-components'
import GlobalStyle from './globalStyles'
import NavigationTop from "./components/NavigationTop"
import NavigationBottom from "./components/NavigationBottom"
import BackgroundImage from "../public/logo1.webp"
import { Fragment } from 'react/jsx-runtime'

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
`

const Img = styled.img`
  width: 50%;
  border-radius: 50%;
  opacity: 40%;
`

function App() {

  return (
    <Fragment>
      <GlobalStyle /> 
      <NavigationTop /> 
      <Div>
        <Img src={BackgroundImage} alt="Logo" />
      </Div>
      <NavigationBottom />
    </Fragment>
  )
}

export default App
