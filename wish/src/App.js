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

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <GreetingForm onSubmit={handleGreet} />
      <GreetingMessage message={message} />
    </div>
  );
};

export default App;
