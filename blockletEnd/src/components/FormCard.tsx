import React from 'react';
import { Grid, Typography, Card, CardContent, Box } from '@mui/material';
import { Edit } from '@mui/icons-material';

interface IFormCardDdata {
  userName: string,
  email: string,
  phone: number
}

interface IFormCard {
  data: IFormCardDdata;
  onChangeEdit?: (...args: any) => void
}


const FormCard: React.FC<IFormCard> = ({ data, onChangeEdit }: IFormCard) => {

  const keys = Object.keys(data) as (keyof IFormCardDdata)[]

  return (
    <Card sx={{ maxWidth: 768 }}>
      <CardContent>
        <Box sx={{ position: 'relative' }}>
          <Typography variant="h5" component="div">
            User Profile
          </Typography>
          <Edit sx={{ position: 'absolute', top: '0px', right: '0px', cursor: 'pointer', '&:hover': { opacity: 0.5 } }} onClick={() =>  onChangeEdit && onChangeEdit()}/>
        </Box>
        <Grid container alignItems="center" justifyContent="flex-start" spacing={2} style={{ marginTop: 20 }}>
          {keys.map((key) => (
              <Grid item xs={18} sm={12} key={key} display={'flex'} justifyContent={'center'}>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={'10px'} width={'220px'}>
                  <Typography variant="subtitle1" color="textSecondary" style={{ minWidth: '100px'}}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                  </Typography>
                  <Typography variant="body1">
                    {data[key]}
                  </Typography>
                  </Box>
              </Grid>
            ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default FormCard;
