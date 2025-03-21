import styled from 'styled-components'
import LogoImg from "/logo1.webp"

const NavTop = styled.nav`
	background-color: var(--color-primary);
	height: 3.5rem;
`

const NavDivTop = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`

const Logo = styled.img`
	width: 3rem;
`

function NavigationTop() {
  
  return (
	<> 
		<NavTop>
			<NavDivTop>
				<a href="/"><Logo src={LogoImg} alt="logo" /></a>
				<a href="#"><span className="material-symbols-outlined">search</span></a>
				<a href="#"><span className="material-symbols-outlined">help</span></a>
				<a href="#"><span className="material-symbols-outlined">logout</span></a>
			</NavDivTop>
		</NavTop>
	</>  
  )
}

export default NavigationTop