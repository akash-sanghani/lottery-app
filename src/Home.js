import React, { useState } from 'react';

const Home = () => {
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send input to backend
    console.log('Input:', input);
  };

  return (
    <div>
      <h2>Home</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;