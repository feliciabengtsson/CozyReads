import styled from 'styled-components'
import GlobalStyle from './globalStyles'
import { Fragment } from 'react/jsx-runtime'

import { createHashRouter, Link, Outlet, RouterProvider } from 'react-router-dom'

import NavigationTop from "./components/NavigationTop"
import NavigationBottom from "./components/NavigationBottom"
import BackgroundImage from "../public/logo1.webp"
import Startview from './pages/StartView'

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

  const router = createHashRouter([
    {
      children: [
        { element: <Startview />, path: '/' },
      ],
      element: (
        <Fragment>
          <GlobalStyle /> 
          
          <Link to="/">Hem</Link>
          
          <NavigationTop /> 
          <Div>
            <Img src={BackgroundImage} alt="Logo" />
          </Div>
          <NavigationBottom />

          <main>
            <Outlet />
          </main>
        </Fragment>
      )
    }
  ])

  return <RouterProvider router={router} />
}

export default App
