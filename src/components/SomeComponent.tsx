import styled from 'styled-components'
import { useContext } from 'react'
import MyBooksContext from '../MyBooksContext'

const BooksDiv = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 1fr;
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

function SomeComponent() {
	const { books } = useContext(MyBooksContext)
  
	return (
		<div>
			<h3>My books:</h3>
			{books && <BooksDiv>
				{books.map((book) => (
					<BooksCard key={book.id}>
						<BookCover src={book.cover_url} alt="Book cover" />
						<BookText>{book.title}</BookText>
					</BooksCard>
				))}
			</BooksDiv>}
		</div>
	)
  }
  
  export default SomeComponent