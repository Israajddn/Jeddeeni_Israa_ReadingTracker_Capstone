import React from 'react';

function BookDetails({book}) {
    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString();
      }
      
  return (
    <div className='book-details'>
        <h4>{book.title}</h4>
        <p><strong>Author: </strong>{book.author}</p>
        <p><strong>Date Started: </strong>{formatDate(book.dateStarted)}</p>
        <p><strong>Date Finished: </strong>{formatDate(book.dateFinished)}</p>
    </div>
  )
}

export default BookDetails;