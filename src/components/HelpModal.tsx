import styled from 'styled-components'


const ModalWrapper = styled.div`
	backdrop-filter: blur(5px);
	background-color: rgba(0, 0, 0, 0.15);
	height: 100vh;
	width: 100vw;
	position: fixed;
	right: 0;
	right: 0;
	top: 0;
	bottom: 0;
`
const ModalContent = styled.div`
	background-color: #BFA58A;
	border-radius: 6px;
	color: rgba(0, 0, 0, 0.897);
	height: fit-content;
	width: 80%;
	margin-inline: auto;
	padding: 1rem;
	margin-top: 4rem;
	position: relative;
`
const Close = styled.span`
	cursor: pointer;
	position: absolute;
	right: 1em;
	top: 1em;
`


function HelpModal() {
  
	return (
		<ModalWrapper>
			<ModalContent>
				<Close>x</Close>
				<h3>Instructions:</h3>
				<p>HelpInfo</p>
			</ModalContent>
		</ModalWrapper>
	)
  }
  
  export default HelpModal