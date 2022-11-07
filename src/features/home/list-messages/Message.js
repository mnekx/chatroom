import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export default function Message() {
  return (
    <Card sx={{ width: '60%', display: 'flex' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        
        <IconButton aria-label='user'>
          <AccountBoxIcon />
          <Typography variant='body2'>User name</Typography>
        </IconButton>
      </Box>
      <CardContent>
        <Typography variant='body2'>
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
  );
}
