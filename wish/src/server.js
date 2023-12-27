// src/App.js
import React, { useState } from 'react';
import GreetingForm from './GreetingForm';
import GreetingMessage from './GreetingMessage';
import './styles.css';

const App = () => {
  const [message, setMessage] = useState('');

  const handleGreet = async (name) => {
    try {
      const response = await fetch('http://localhost:3000/api/greet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const rawData = await response.text();
      console.log('Raw Data:', rawData); // Log the raw data received from the server

      const data = JSON.parse(rawData);
      setMessage(data.message);
    } catch (error) {
      console.error('Error:', error.message);
      setMessage('Error occurred while fetching the greeting.');
    }
  };

  return (
    <div className="container">
      <GreetingForm onSubmit={handleGreet}/>
      <GreetingMessage message={message} />
    </div>
  );
};

export default App;
