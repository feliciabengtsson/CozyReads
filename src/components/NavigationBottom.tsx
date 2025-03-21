import styled from 'styled-components'

const NavFooter = styled.nav`
	background-color: var(--color-primary);
	height: 3.5rem;
	margin-top: auto;
`

function NavigationBottom() {
  
	return (
	  <> 
		  <NavFooter>
			  <div className="nav-links-bottom">
			  		<a href="#"><span className="material-symbols-outlined">group</span></a>
				  <a href="/"><span className="material-symbols-outlined">home</span></a>
				  <a href="#"><span className="material-symbols-outlined">library_books</span></a>
				  <a href="#"><span className="material-symbols-outlined">account_circle</span></a>
			  </div>
		  </NavFooter>
	  </>  
	)
  }
  
  export default NavigationBottom