import styled from 'styled-components'
import { Fragment } from 'react/jsx-runtime'
import BannerImg from '../assets/images/banner.jpg'

const Img = styled.img`
  width: 50%;
  border-radius: 50%;
  opacity: 40%;
`

function Startview() {

  return (
    <Fragment>
		<div id='main-wrapper'>
			<section id='introduction'>
				<h1>CozyReads</h1>
				<p>A place for book lovers to gather, discuss, and discover 
					new favorites. Curl up in your favorite chair, pour 
					yourself a cup of tea, and let's dive into magical 
					stories together!
				</p>
				<Img src={BannerImg} alt="Logo" />
			</section>
			<section id='about'>
				<h2>About us</h2>
				<h3>What is CozyReads?</h3>
				<p>CozyReads is a warm and welcoming online book club where 
					we share our love for books, discuss great reads, and find new 
					literary adventures. Whether you love classics, fantasy, feel-good 
					novels, or thrillers, there's a place for you here!
				</p>
				<p>Why join us?</p>
				<ul>
					<li>✔ Discover a new book every month</li>
					<li>✔ Engage in discussions with fellow book lovers</li>
					<li>✔ Get personalized book recommendations and reviews</li>
					<li>✔ Find your reading community</li>
				</ul>
			</section>
		</div>
    </Fragment>
  )
}

export default Startview
