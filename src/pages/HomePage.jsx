import { useState, useEffect } from 'react';
// Todo: Bring in the required component from 'react-router-dom' for linking between pages
import { useParams, Link } from 'react-router-dom';


export default function HomePage() {


  // Iterate over each mock user to display their abridged profile data and a link to their page
  return (
    <div className="container pt-4">
      <ul className="list-group list-group">
        <h1>HOME PAGE</h1>
      </ul>
    </div>
  );
}
