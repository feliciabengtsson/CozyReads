import { Fragment } from 'react/jsx-runtime'

function BookCirclesView() {

  return (
    <Fragment>
		<div id='main-wrapper'>
			<section id='book-circles'>
				<h2>Book circles</h2>
				<p>Love reading with others? Join a CozyReads Book Circle, 
					where small groups dive into the same book and share 
					their thoughts in a warm and friendly space!
				</p>
				<h3>How It Works:</h3>
				<p>📅 Monthly Pick - Each month, we select a new book to 
					read together.
				</p>
				<p>💬 Weekly Check-Ins - Discuss key moments and themes 
					in our private group chats.
				</p>
				<p>🎙️ Live Discussions - Join our virtual meet-ups for 
					deeper conversations and fun book-related activities.
				</p>
				<p>✨ Cozy Extras - Get reading guides, discussion prompts, 
					and exclusive author Q&As!
				</p>
				<p>👉 Want to start your own book circle? Create a group 
					with friends or join an existing one - the more, the 
					merrier!
				</p>
			</section>
			<section id='my-groups'>
				<div className='main-box'>

				</div>
			</section>
		</div>
    </Fragment>
  )
}

export default BookCirclesView