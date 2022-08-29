import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

 function Steps(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt={props.image}
        />
        <CardContent>
          <Typography style={{fontFamily:'Courier Prime'}} gutterBottom variant="h5" component="div">
            {props.step}
          </Typography>
          <Typography style={{fontFamily: 'Poppins'}} variant="body2" color="text.secondary">
            {props.instruction}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Steps;