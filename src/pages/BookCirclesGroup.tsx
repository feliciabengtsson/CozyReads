import styled from 'styled-components'
import { Fragment } from 'react/jsx-runtime'
import BookCirclesBanner from '../assets/images/bookbanner.jpg'

const Img = styled.img`
  width: 50%;
  border-radius: 50%;
  opacity: 40%;
`

function BookCirclesGroup() {

  return (
    <Fragment>
		<div id='main-wrapper'>
			<section id='book-circle-content'>
				<h2>Book Circles Name</h2>
				<Img src={BookCirclesBanner} alt="Logo" />
				<div className='book-circles-box'>
					<h3>Currently Reading: "The Hobbit"</h3>
				</div>
				<div className='book-circles-box'>
					<h3>About The Club</h3>
				</div>
				<div className='book-circles-box'>
					<h3>Discussion Forum</h3>
				</div>
				<div className='book-circles-box'>
					<h3>Reading Schedule</h3>
				</div>
				<div className='book-circles-box'>
					<h3>Latest Comments</h3>
				</div>
				<div className='book-circles-box'>
					<h3>Next Meetup</h3>
				</div>
			</section>
		</div>
    </Fragment>
  )
}

export default BookCirclesGroup