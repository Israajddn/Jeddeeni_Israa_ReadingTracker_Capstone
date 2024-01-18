import React from 'react';
import { useBooksContext } from '../hooks/useBooksContext';

function BookDetails({ book }) {

  const { dispatch } = useBooksContext();

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString();
  }

  const handleClick = async () => {
    const response = await fetch('/api/readingTracker/' + book._id, {
      method: 'DELETE'
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_BOOK', payload: json })
    }
  }

  return (
    <div className='book-details'>
      <h4>{book.title}</h4>
      <p><strong>Author: </strong>{book.author}</p>
      <p><strong>Date Started: </strong>{formatDate(book.dateStarted)}</p>
      <p><strong>Date Finished: </strong>{formatDate(book.dateFinished)}</p>
      <span className='material-symbols-outlined' onClick={handleClick}>delete</span>
    </div>
  )
}

export default BookDetails;