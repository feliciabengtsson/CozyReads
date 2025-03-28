import { createContext } from 'react'

interface BookContext {
	books: [{
		id: number;
		title: string;
		author: string;
		genre: string;
		year: number;
		cover_url: string;
		summary: string;
	}]
}

const MyBooksContext = createContext<BookContext>({
	books: [{
		id: 0,
		title: '',
		author: '',
		genre: '',
		year: 0,
		cover_url: '',
		summary: ''
	}]
});

export default MyBooksContext