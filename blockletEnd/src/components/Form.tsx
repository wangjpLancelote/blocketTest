import React, { useRef } from 'react';
import { Box, InputAdornment, IconButton, CardActions, CardContent, Card, Button, TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { Clear } from '@mui/icons-material';
import { IUserData } from '../types/user';
import axios from '../libs/api'

interface FormProps {
  data: IUserData;
  onChangeEvent?: (...args: any) => void
}


const FormBox: React.FC<FormProps> = (props: FormProps) => {
  const { data, onChangeEvent } = props;
  const { handleSubmit, control, formState: { errors }, reset } = useForm({
    defaultValues: data
  });
  const formRef = useRef<HTMLFormElement>(null)

  const onSubmit = async (data: any) => {
    const rt = await axios.post('/api/users', { ...data })
    if (rt && rt.status === 200) {
      onChangeEvent && onChangeEvent(data);
    }
  };

   const clearField = (fieldName: string) => {
    reset({ [fieldName]: '' });
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }} ref={formRef}>
      <Card sx={{ maxWidth: 768 }}>
      <CardContent>
        <Controller
        name="userName"
        control={control}
        defaultValue=""
        rules={{ required: 'userName is required' }}
        render={({ field }) => (
          <TextField
            {...field}
            label="userName"
            variant="outlined"
            margin="normal"
            fullWidth
            error={!!errors.userName}
            helperText={errors.userName ? (errors.userName.message as string) : ''}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {field.value && (
                    <IconButton onClick={() => clearField('userName')} size="small">
                      <Clear />
                    </IconButton>
                  )}
                </InputAdornment>
              )
            }}
          />
        )}
      />
      <Controller
        name="phone"
        control={control}
        rules={{ required: 'Phone is required', pattern: {
            value: /\d+/,
            message: 'Invalid phone number'
          } }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Phone"
            variant="outlined"
            margin="normal"
            fullWidth
            error={!!errors.phone}
            helperText={errors.phone ? (errors.phone.message as string) : ''}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {field.value && (
                    <IconButton onClick={() => clearField('phone')} size="small">
                      <Clear />
                    </IconButton>
                  )}
                </InputAdornment>
              )
            }}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'Invalid email address'
          }
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            error={!!errors.email}
            helperText={errors.email ? (errors.email.message as string) : ''}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {field.value && (
                    <IconButton onClick={() => clearField('email')} size="small">
                      <Clear />
                    </IconButton>
                  )}
                </InputAdornment>
              )
            }}
          />
        )}
      />
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button type='submit' size="small">Submit</Button>
        </Box>
      </CardActions>
    </Card>
    </Box>
  )
}

export default FormBox