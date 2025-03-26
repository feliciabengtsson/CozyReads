import { Link } from 'react-router-dom'

import styled from 'styled-components'
import LogoImg from "/logonew.webp"
import { Fragment } from 'react/jsx-runtime'
import HelpModal from './HelpModal'

const NavTop = styled.nav`
	background-color: var(--color-primary);
	height: 3.5rem;
`
const NavDivTop = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 3.5rem;
`
const LogoDiv = styled.div`
	margin: 0 0.5rem;
`
const Logo = styled.img`
	width: 3rem;
`
const IconList = styled.ul`
	display: flex;
	list-style: none;
	
`
const Li = styled.li`
	margin: 0 .8rem;
`

function NavigationTop() {
  
  return (
	<Fragment> 
		<NavTop>
			<NavDivTop>
				<LogoDiv>
					<Link to="/"><Logo src={LogoImg} alt="logo" /></Link>
				</LogoDiv>
				<IconList>
					<Li>
						<Link to="/"><span className="material-symbols-outlined">search</span></Link>
					</Li>
					<Li>
						<span onClick={HelpModal} className="material-symbols-outlined">help</span>
					</Li>
					<Li>
						<Link to="/"><span className="material-symbols-outlined">logout</span></Link>
					</Li>
				</IconList>
			</NavDivTop>
		</NavTop>
		{/* <HelpModal /> */}
	</Fragment>  
  )
}

export default NavigationTop