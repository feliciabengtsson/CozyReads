import styled from 'styled-components';
import { Fragment } from 'react/jsx-runtime';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import booksDb from '../../public/books.json';

const Title = styled.h2`
    margin: 0;
`;
const BookCover = styled.div`
    width: fit-content;
    margin: 20px auto;
`;
const CoverImg = styled.img`
    width: 40vw;
    margin: auto;
    @media (min-width: 890px) {
        width: 12rem;
    }
`;
const Genre = styled.span`
    color: #8b5e3c;
    font-size: 0.7rem;
    background: rgba(191, 165, 138, 0.4);
    border-radius: 6px;
    padding: 0.4rem;
`;

interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    year: number;
    cover_url: string;
    summary: string;
}

function BookDetails() {
    const { id } = useParams();
    const bookId = id ? parseInt(id) : undefined;
    const [book, setBook] = useState<Book>({
        id: 0,
        title: '',
        author: '',
        genre: '',
        year: 0,
        cover_url: '',
        summary: ''
    });

    useEffect(() => {
        if (bookId !== undefined) {
            const selectedBook = booksDb.find((book) => book.id === bookId);
            if (selectedBook) {
                setBook(selectedBook);
            }
        }
        console.log(book, 'vald bok');
    }, [book, bookId]);

    return (
        <Fragment>
            <div>
                <BookCover>
                    <CoverImg src={book.cover_url} alt="Book cover" />
                </BookCover>
                <Title>{book.title}</Title>
                <h3>
                    By: {book.author}, {book.year}
                </h3>
                <Genre>{book.genre}</Genre>
                <p>{book.summary}</p>
            </div>
        </Fragment>
    );
}

export default BookDetails;
