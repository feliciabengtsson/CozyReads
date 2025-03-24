import { Link } from 'react-router-dom'

import styled from 'styled-components'
import LogoImg from "/logo1.webp"
import { Fragment } from 'react/jsx-runtime'

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
	<Fragment> 
		<NavTop>
			<NavDivTop>
				<Link to="/"><Logo src={LogoImg} alt="logo" /></Link>
				<Link to="/"><span className="material-symbols-outlined">search</span></Link>
				<Link to="/"><span className="material-symbols-outlined">help</span></Link>
				<Link to="/"><span className="material-symbols-outlined">logout</span></Link>
			</NavDivTop>
		</NavTop>
	</Fragment>  
  )
}

export default NavigationTop