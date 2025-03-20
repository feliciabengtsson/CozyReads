import './App.css'
import NavigationTop from "./components/NavigationTop"
import NavigationBottom from "./components/NavigationBottom"

function App() {

  return (
    <>
      <NavigationTop /> 
      <div className="background-wrapper">
        <img id="background-logo" src="/logo.webp" alt="Logo" />
      </div>
      <NavigationBottom />
    </>
  )
}

export default App
