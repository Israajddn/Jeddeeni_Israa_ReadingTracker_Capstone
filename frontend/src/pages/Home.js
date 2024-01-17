import { React, useEffect, useState } from 'react';

// components
import BookDetails from '../components/BookDetails';

function Home() {

  const [books, setBooks] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('http://localhost:4000/api/readingTracker');
      const json = await response.json();

      if (response.ok) {
        setBooks(json);
      }
    }

    fetchBooks();

  }, []);

  return (
    <div className='home'>
      <div className='books'>
        {books && books.map((book) => (
          <BookDetails key={book._id} book={book}/>
        ))}
      </div>
    </div>
  )
}

export default Home;