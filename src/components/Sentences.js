import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

function Sentences() {
  const [sentences, setSentences] = useState([]);
  const [refresh, setRefresh] = useState(1);

  useEffect(() => {
    if (refresh) {
      fetch("https://api.jsonbin.io/v3/b/65e0e5cb1f5677401f3649ca", {
        headers: {
        "Content-Type": "application/json",
        "X-Master-Key": "$2a$10$8IaBMsTjuufn4Hm39HEmreevKLYoGHhH2y/WieQrjDj.uN5o9iCgW"
        },
      })

        .then(response => response.json())
        .then(data => {
          setSentences(data.record);
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
            {sentence}
          </Typography>
        ))}
      </ul>
    </div>
  );
}

export default Sentences;
