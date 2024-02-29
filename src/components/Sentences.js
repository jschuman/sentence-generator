import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

function Sentences() {
  const [sentences, setSentences] = useState([]);
  const [refresh, setRefresh] = useState(1);

  useEffect(() => {
    if (refresh) {
      fetch('http://localhost:8000/sentences')
        .then(response => response.json())
        .then(data => {
          setSentences(data);
          setRefresh(0);
        });
    }
  }, [refresh]); 

  return (
    <div>
      <Button variant="contained" onClick={() => setRefresh(1)}>
        refresh
      </Button>
      <ul>
        {sentences.map((sentence, index) => (
          <Typography key={index} variant="h5" gutterBottom>
            {sentence.content}
          </Typography>
        ))}
      </ul>
    </div>
  );
}

export default Sentences;
