import React, { useState, useEffect } from 'react';

export default function App() {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
      .catch(error => console.error(error));
  }, [resourceType]);

  const handleButtonClick = (type) => {
    setResourceType(type);
  };

  return (
    <>
      <div>
        <button onClick={() => handleButtonClick('posts')}>Posts</button>
        <button onClick={() => handleButtonClick('users')}>Users</button>
        <button onClick={() => handleButtonClick('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map(item => (
        <pre key={item.id}>{JSON.stringify(item, null, 2)}</pre>
      ))}
    </>
  );
}
