import React, { FC } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { IPropsLogin } from '../../../common/types/auth';
import { useStyles } from './styles';
import AppLoadingButton from '../../../Component/loading-button';
import { useTranslation } from 'react-i18next';
import '../../../utils/i18next';

const LoginPage: FC<IPropsLogin> = (props): JSX.Element => {
  const { setUsername, setPassword, handleLogin, password, username, isValid, loading } = props;
  const classes = useStyles();
  const { t } = useTranslation();
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
        />
        {!isValid && <div style={{ color: 'red' }}>{t('form.invalid')}</div>}
        <AppLoadingButton
          type='submit'
          loading={loading}
          variant='contained'
          color='primary'
          className={classes.button}
        >
          {t('form.logBtn')}
        </AppLoadingButton>
      </form>
    </Box>
  );
};

export default LoginPage;
