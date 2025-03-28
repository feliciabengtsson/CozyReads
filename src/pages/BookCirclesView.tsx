import { Fragment } from 'react/jsx-runtime';

function BookCirclesView() {
    return (
        <Fragment>
            <div id="main-wrapper">
                <section id="book-circles">
                    <h2>Book circles</h2>
                    <p>
                        Love reading with others? Join a CozyReads Book Circle, where small groups
                        dive into the same book and share their thoughts in a warm and friendly
                        space!
                    </p>
                </section>
                <section id="my-groups">
                    <div className="main-box"></div>
                </section>
            </div>
        </Fragment>
    );
}

export default BookCirclesView;
