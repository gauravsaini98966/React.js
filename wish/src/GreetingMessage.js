import React from 'react';
import './styles.css';

const GreetingMessage = ({message}) => {
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default GreetingMessage;