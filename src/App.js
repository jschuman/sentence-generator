import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Typography } from '@mui/material';
import SentenceGenerator from './components/SentenceGenerator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1" gutterBottom>
          Sentence Generator
        </Typography>
      </header>
      <SentenceGenerator />
    </div>
  );
}

export default App;
