import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'


function App() {
  const [serverMessage, setServerMessage] = useState('waiting for server message')

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:3001/')
      setServerMessage(result.data)
    }

      fetchData().catch(console.error);
    }, [])  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {serverMessage}
        </p>
      </header>
    </div>
  );
}

export default App;
