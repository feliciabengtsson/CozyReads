import { Fragment } from 'react/jsx-runtime'
import { useEffect, useState } from 'react'

import SomeComponent from '../components/MyBooks'
import MyBooksContext from '../MyBooksContext'

function ProfileView() {
	const [books, setBooks] = useState([])
	
	useEffect(() => {
		fetch('/books.json')
		.then((response) => response.json())
		.then((result) => {
			setBooks(result.slice(0, 3))
			console.log(result.slice(0, 2), 'böcker')
		})
	}, [])

  return (
    <Fragment>
		<MyBooksContext.Provider value={{ books, setBooks }}>
			<SomeComponent />
		</MyBooksContext.Provider>
    </Fragment>
  )
}

export default ProfileView