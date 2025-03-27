import styled from 'styled-components'
import { Fragment } from 'react/jsx-runtime'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const SearchSection = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 1rem auto;
`
const InputField = styled.input`
	border: none;
	border-radius: 15px;
	padding: .5rem;
`
const DropdownMenu = styled(InputField)`
	border: none;
	border-radius: 15px;
	padding: .5rem;
`
const BooksDiv = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: auto;
	width: 85vw;
	height: fit-content;
	margin: auto;
	background-color: rgba(255, 255, 255, 0.90);
	border-radius: 6px;
	cursor: pointer;
`
const BooksCard = styled.div`
	position: relative;
	text-align: center;
	width: 5.5rem;
	height: 7rem;
	background-color: #f5f1e7c3;
	margin: 10px auto;
`
const BookCover = styled.img`
	width: inherit;
	height: inherit;
	z-index: -1;
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
			setBooks(result.slice(0, 9))
			console.log(result, 'böcker')
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
		<SearchSection>
			<div>
				<InputField value={search} onChange={ onChangeHandler } type="text" name='filter-book' placeholder='Search for books' />
			</div>
			<div>
				<DropdownMenu>
					<option value="1" selected>Genres</option>
					<option value="Classic Fiction">Classic Fiction</option>
					<option value="Dystopian">Dystopian</option>
					<option value="Fantasy">Fantasy</option>
					<option value="Young Adult">Young Adult</option>
					<option value="Romance">Romance</option>
					<option value="Adventure">Adventure</option>
					<option value="Thriller">Thriller</option>
					<option value="Horror">Horror</option>
					<option value="Science Fiction">Science Fiction</option>
				</DropdownMenu>
			</div>
		</SearchSection>
		<section>
			{books && filteredBooks === '' ? <BooksDiv>
				{books.map((book) => (
					<Link key={book.id} to={`/books/${book.id}`}><BooksCard>
						<BookCover src={book.cover_url} alt="Book cover" />
					</BooksCard></Link>
				))}
				</BooksDiv>
			: 	<BooksDiv>
					{filteredBooks.map((book) => (
					<Link key={book.id} to={`/books/${book.id}`}><BooksCard>
						<BookCover src={book.cover_url} alt="Book cover" />
					</BooksCard></Link>
					))}
				</BooksDiv>}
		</section>
    </Fragment>
  )
}
export default BooksView
