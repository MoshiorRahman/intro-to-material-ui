import logo from './logo.svg';
import './App.css';
import { Button, Rating } from '@mui/material';
import Newspaper from './components/Newspaper/Newspaper';

function App() {
  return (
    <div className="App">
      <Button variant="contained">my first</Button>
      <Rating
        name="simple-controlled"
        value={4}
        Controlled
      />
      <Newspaper></Newspaper>
    </div>
  );
}

export default App;
