import styled from 'styled-components'
import { Fragment } from 'react/jsx-runtime'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import booksDb from '../../public/books.json'

const Title = styled.h2`
	margin: 0;
`
const BookCover = styled.div`
	width: 40vw;
	margin: 20px auto;
`
const CoverImg = styled.img`
	width: 40vw;
	margin: auto;
`
const Genre = styled.span`
	color: #8B5E3C;
	font-size: 0.7rem;
	background: rgba(191, 165, 138, .4);
	border-radius: 6px;
	padding: .4rem;
`

interface BookType {
	book: {
		id: number;
		title: string;
		author: string;
		genre: string;
		year: number;
		cover_url: string;
		summary: string;
	}
}

function BookDetails() {
	const { id } = useParams()
	const bookId = parseInt(id)
	const [book, setBook] = useState<BookType["book"]>([])

	useEffect(() => {
		const selectedBook = booksDb.find((book) => book.id === bookId)
		setBook(selectedBook)
		console.log(book, 'vald bok')
	}, [])

  return (
    <Fragment>
		<div>
			<BookCover>
				<CoverImg src={book.cover_url} alt="Book cover" />
			</BookCover>
			<Title>{book.title}</Title>
			<h3>By: {book.author}, {book.year}</h3>
			<Genre>{book.genre}</Genre>
			<p>{book.summary}</p>
		</div>
    </Fragment>
  )
}

export default BookDetails
