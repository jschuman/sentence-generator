import React, {useState} from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import GeneratorForm from './GeneratorForm';
import Sentences from './Sentences';

const SentenceGenerator = () => {
  const [needsRefresh, setNeedsRefresh] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <GeneratorForm setNeedsRefresh={setNeedsRefresh}/>
        </Grid>
        <Grid item xs={8}>
          <Sentences needsRefresh={needsRefresh} setNeedsRefresh={setNeedsRefresh}/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SentenceGenerator;
