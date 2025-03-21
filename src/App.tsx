import './App.css'
import styled from 'styled-components'
import NavigationTop from "./components/NavigationTop"
import NavigationBottom from "./components/NavigationBottom"
import BackgroundImage from "../public/logo1.webp"

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
    <>
      <NavigationTop /> 
      <Div>
        <Img src={BackgroundImage} alt="Logo" />
      </Div>
      <NavigationBottom />
    </>
  )
}

export default App
