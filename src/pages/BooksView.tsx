import styled from 'styled-components'
import { Fragment } from 'react/jsx-runtime'

const Img = styled.img`
  width: 50%;
  border-radius: 50%;
  opacity: 40%;
`

function BooksView() {

  return (
    <Fragment>
		<div id='main-wrapper'>
			<section id='highlight'>
				<h3>📖 Book of the Month:</h3>
				<p>The Invisible Library by Genevieve Cogman</p>
				<p>Join us on an adventure through parallel worlds 
					where a secret library collects unique books from 
					different realities! Perfect for fans of fantasy 
					and mystery.
				</p>
				<p>💬 Discussion Starts: 25th of each month</p>
			</section>
			<section id='my-books'>
				<h3>My Books:</h3>
				<div className='main-box'>

				</div>
			</section>
		</div>
    </Fragment>
  )
}

export default BooksView