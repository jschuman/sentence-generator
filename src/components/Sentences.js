import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

function Sentences({needsRefresh, setNeedsRefresh}) {
  const [sentences, setSentences] = useState([]);
  const [refresh, setRefresh] = useState(1);

  useEffect(() => {
    if (refresh || needsRefresh) {
      let api = `${process.env.REACT_APP_API_HOST}/sentences`;
      fetch(api, {
        headers: {
        "Content-Type": "application/json",
        },
      })
        .then(response => response.json())
        .then(data => {
          setSentences(data);
          setRefresh(0);
          setNeedsRefresh(false);
        });
    }
  }, [refresh, needsRefresh, setNeedsRefresh]); 

  return (
    <div>
      <Button variant="contained" onClick={() => setRefresh(1)}>
        refresh
      </Button>
      <ul>
        {sentences.map((sentence, index) => (
          <Typography key={sentence.id} variant="h5" gutterBottom>
            {sentence.text}
          </Typography>
        ))}
      </ul>
    </div>
  );
}

export default Sentences;
