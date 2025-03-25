import styled from 'styled-components'
import { Fragment } from 'react/jsx-runtime'
import { useEffect, useState } from 'react'

const BooksDiv = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: auto;
	width: 85vw;
	height: fit-content;
	margin: auto;
	background-color: rgba(255, 255, 255, 0.90);
	border-radius: 6px;
`
const BooksCard = styled.div`
	width: 5.5rem;
	height: 7rem;
	background-color: #f5f1e7c3;
	margin: 10px auto;
`
const BookText = styled.p`
	position: absolute;
	font-size: .7rem;
	text-align: center;
`
const BookCover = styled.img`
	position: relative;
	width: inherit;
`

function BooksView() {
	const [books, setBooks] = useState([])

	useEffect(() => {
		fetch('/books.json')
		.then((response) => response.json())
		.then((result) => {
			setBooks(result.slice(0, 10))
			console.log(result, 'böcker')
		})
	}, [])

  return (
    <Fragment>
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
		<section>
			{books && <BooksDiv>
				{books.map((book) => (
					<BooksCard key={book.id}>
						<BookCover src={book.cover_url} alt="Book cover" />
						<BookText>{book.title}</BookText>
					</BooksCard>
				))}
			</BooksDiv>}
		</section>
    </Fragment>
  )
}

export default BooksView