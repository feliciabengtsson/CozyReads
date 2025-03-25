import styled from 'styled-components'
import GlobalStyle from './globalStyles'
import { Fragment } from 'react/jsx-runtime'

import { Routes, Route } from 'react-router-dom'

import NavigationTop from "./components/NavigationTop"
import NavigationBottom from "./components/NavigationBottom"
import Startview from './pages/StartView'
import BooksView from './pages/BooksView'
import BookCirclesView from './pages/BookCirclesView'
import ProfileView from './pages/ProfileView'

const Div = styled.div`
  width: 300px;
  margin: auto;
`

function App() {
  return (
    <Fragment>
      <NavigationTop />

      <Div>
        <Routes>
          <Route path="/" element={<Startview />} />
          <Route path="books" element={<BooksView />} />
          <Route path="bookcircles" element={<BookCirclesView />} />
          <Route path="profile" element={<ProfileView />} />
        </Routes>
      </Div>

      <NavigationBottom />
      <GlobalStyle />
    </Fragment>
  )
}

export default App
