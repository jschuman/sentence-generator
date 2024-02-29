import React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import GeneratorForm from './GeneratorForm';
import Sentences from './Sentences';

const SentenceGenerator = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <GeneratorForm />
        </Grid>
        <Grid item xs={8}>
          <Sentences />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SentenceGenerator;
