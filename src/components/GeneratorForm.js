import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import nouns from '../nouns.json';
import verbs from '../verbs.json';

function GeneratorForm({setNeedsRefresh}) {
  const [name, setName] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUpdating(true);
    // Add your logic here to generate the sentence using the name
    console.log(`Sentence created with name: ${name}`);

    let randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    let randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    let randomSentence = `${name} ${randomVerb} ${randomNoun}!`;
    let jsonObj = {
      "text": randomSentence
    }

    let api = `${process.env.REACT_APP_API_HOST}/sentences`;
    // then post the updated array back to the server
    fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonObj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setName('');
        setNeedsRefresh(true);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsUpdating(false);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          id="name"
          label="Name"
          variant="standard"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Button type="submit" variant="contained">
          Create Sentence
        </Button>
        &nbsp;&nbsp;
      </form>
      <br />
      {isUpdating && (
        <CircularProgress color="secondary" />
      )}
    </div>
  );
}

export default GeneratorForm;
