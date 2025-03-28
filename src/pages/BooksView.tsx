import styled from 'styled-components'
import { Fragment } from 'react/jsx-runtime'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Form = styled.form`
	display: flex;
	justify-content: space-between;
	margin: 1rem auto;
	input, select {
		background-color: rgba(255, 255, 255, 0.90);
		border: none;
		border-radius: 15px;
		padding: .5rem;
	}
`
const BooksDiv = styled.div`
	background-color: rgba(255, 255, 255, 0.90);
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: auto;
	width: auto;
	height: fit-content;
	margin: auto;
	border-radius: 6px;
`
const BooksCard = styled.div`
	width: 5.5rem;
	height: 7rem;
	background-color: #f5f1e7c3;
	margin: 10px auto;
`
const BookCover = styled.img`
	width: 5.5rem;
	height: 7rem;
	z-index: -1;
	cursor: pointer;
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

function BooksView() {
	const [books, setBooks] = useState<BookType["book"][]>([])
	const [search, setSearch] = useState('')
	const [filteredBooks, setFilteredBooks] = useState(books)

	useEffect(() => {
		fetch('/books.json')
		.then((response) => response.json())
		.then((result) => {
			setBooks(result.slice(0, 12))
			console.log(result, 'hämtade böcker')
		})
	}, [])

	function onChangeHandler(event) {
		const searchInput = event.target.value;
		setSearch(searchInput)

		const filteredSearch = books.filter((book) =>
		book.title.toLowerCase().includes(searchInput.toLowerCase()))
		console.log(searchInput, 'sökt bok')
		setFilteredBooks(filteredSearch)
	}

  return (
    <Fragment>
		<section>
			<Form>
				<div>
					<input value={search} onChange={ onChangeHandler } type="text" name='filter-book' placeholder='Search for books' />
				</div>
				<div>
					<label>
						<select name="SelectedGenre" defaultValue="Genres">
							<option value="Genres">Genres</option>
							<option value="Classic Fiction">Classic Fiction</option>
							<option value="Dystopian">Dystopian</option>
							<option value="Fantasy">Fantasy</option>
							<option value="Young Adult">Young Adult</option>
							<option value="Romance">Romance</option>
							<option value="Adventure">Adventure</option>
							<option value="Thriller">Thriller</option>
							<option value="Horror">Horror</option>
							<option value="Science Fiction">Science Fiction</option>
						</select>
					</label>
				</div>
			</Form>
		</section>
		<section>
			{books && filteredBooks ? <BooksDiv>
				{books.map((book) => (
					<BooksCard><Link key={book.id} to={`/books/${book.id}`}>
						<BookCover src={book.cover_url} alt="Book cover" />
					</Link></BooksCard>
				))}
				</BooksDiv>
			: 	<BooksDiv>
					{filteredBooks.map((book) => (
					<BooksCard><Link key={book.id} to={`/books/${book.id}`}>
						<BookCover src={book.cover_url} alt="Book cover" />
					</Link></BooksCard>
					))}
				</BooksDiv>}
		</section>
    </Fragment>
  )
}
export default BooksView
