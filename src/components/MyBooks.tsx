import styled from 'styled-components';
import { Fragment, useContext } from 'react';
import MyBooksContext from '../MyBooksContext';

const BooksDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    height: fit-content;
    margin: auto;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 6px;
`;
const BooksCard = styled.div`
    width: 5.5rem;
    height: 7rem;
    background-color: #f5f1e7c3;
    margin: 10px auto;
`;
const BookCover = styled.img`
    position: relative;
    width: inherit;
    height: inherit;
`;

function MyBooks() {
    const { books } = useContext(MyBooksContext);

    return (
        <Fragment>
            <div>
                <h3>My books:</h3>
                {books ? (
                    <BooksDiv>
                        {books.map((book) => (
                            <BooksCard key={book.id}>
                                <BookCover src={book.cover_url} alt="Book cover" />
                            </BooksCard>
                        ))}
                    </BooksDiv>
                ) : (
                    <BooksDiv>
                        <p>You currently don't have any books.</p>
                    </BooksDiv>
                )}
            </div>
        </Fragment>
    );
}

export default MyBooks;
