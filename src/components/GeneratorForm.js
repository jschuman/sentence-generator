import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function GeneratorForm() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to generate the sentence using the name
    console.log(`Sentence created with name: ${name}`);

    // Post the sentence to the JSON server
    fetch('http://localhost:8000/sentences', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: name }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setName('');
      })
      .catch((error) => console.log(error));
  };

  return (
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
    </form>
  );
}

export default GeneratorForm;
