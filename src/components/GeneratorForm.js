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

    const masterKey = "$2a$10$8IaBMsTjuufn4Hm39HEmreevKLYoGHhH2y/WieQrjDj.uN5o9iCgW";

    // first get the most up to date json
    fetch("https://api.jsonbin.io/v3/b/65e0e5cb1f5677401f3649ca", {
        headers: {
        "Content-Type": "application/json",
        "X-Master-Key": masterKey
        },
      })
        .then(response => response.json())
        .then(data => {
          // array of sentences in data.record
          let sentences = data.record;
          sentences.push(randomSentence);
          
          // then post the updated array back to the server
          fetch('https://api.jsonbin.io/v3/b/65e0e5cb1f5677401f3649ca', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              "X-Master-Key": masterKey
            },
            body: JSON.stringify(sentences),
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
