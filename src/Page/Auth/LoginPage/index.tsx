import React, { FC } from 'react';
import { Alert, Box, TextField, Typography } from '@mui/material';
import { IPropsLogin } from '../../../common/types/auth';
import { useStyles } from './styles';
import AppLoadingButton from '../../../Component/Loading-Button';
import { useTranslation } from 'react-i18next';
import '../../../utils/i18next';

const LoginPage: FC<IPropsLogin> = (props): JSX.Element => {
  const { setUsername, setPassword, handleLogin, password, username, isValid, loading } = props;
  const classes = useStyles();
  const { t } = useTranslation();
  console.log(isValid);
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <Box className={classes.root}>
      <Typography variant='h4' gutterBottom>
        {t('form.logHeader')}
      </Typography>
      <form className={classes.form} onSubmit={handleLogin}>
        <TextField
          type='text'
          id='username'
          label='Username'
          variant='outlined'
          margin='normal'
          value={username}
          onChange={handleUsernameChange}
          className={classes.textField}
          required
        />
        <TextField
          id='password'
          label='Password'
          type='password'
          variant='outlined'
          margin='normal'
          value={password}
          onChange={handlePasswordChange}
          className={classes.textField}
          required
        />
        {!isValid && <Alert severity='error'>{t('form.invalid')}</Alert>}
        <AppLoadingButton
          sx={{ position: 'relative', right: 0, left: 0, top: 0 }}
          type='submit'
          loading={loading}
          variant='contained'
          color='primary'
        >
          {t('form.logBtn')}
        </AppLoadingButton>
      </form>
    </Box>
  );
};

export default LoginPage;
