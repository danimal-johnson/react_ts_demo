import React from 'react';
import { TextField } from './TextField';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <TextField text='Hello There.'
      ok={true}
      
      person={{
        firstName: '',
        lastName: ''
      }}/>
    </div>
  );
}

export default App;
