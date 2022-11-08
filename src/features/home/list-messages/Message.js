import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
export default function Message({message}) {
  return (
    <Card sx={{ width: '60%', display: 'flex', marginBottom: '1rem'}}>
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        
        <IconButton aria-label='user'>
          <AccountBoxIcon />
          <Typography variant='body2'>{message.user}</Typography>
        </IconButton>
      </Box>
      <CardContent sx={{width: 'fit-content'}}>
        <Typography variant='body2' sx={{width: 'fit-content'}}>
          {message.message}
        </Typography>
      </CardContent>
    </Card>
  );
}
