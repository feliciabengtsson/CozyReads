import styled from 'styled-components'
import BackgroundImage from "../public/logo1.webp"

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
`

function NavigationTop() {
  
  return (
	<> 
		<nav>
			<div className="nav-links">
				<a href="/"><img id="logo-nav" src="/logo.webp" alt="logo" /></a>
				<a href="#"><span className="material-symbols-outlined">search</span></a>
				<a href="#"><span></span></a>
				<a href="#"><span></span></a>
			</div>
		</nav>
	</>  
  )
}

export default NavigationTop