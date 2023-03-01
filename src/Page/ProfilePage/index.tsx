import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Button, Grid, TextField, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import '../../utils/i18next';

const ProfilePage: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [avatarFile, setAvatarFile] = useState<string | null>(null);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSaveClick = () => {
    setFirstName(firstName);
    setUsername(username);
    setNewPassword(newPassword);
    setAvatarFile(avatarFile);
  };

  const handleNewPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          setAvatarFile(event.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const logOut = async () => {
    localStorage.removeItem('username');
    await navigate('/');
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Box sx={{ position: 'relative', paddingLeft: '24px !important', cursor: 'pointer' }}>
          <Button variant='contained' color='primary' onClick={logOut}>
            {t('profile.logout')}
            &nbsp;
            <LogoutIcon />
          </Button>
        </Box>
        <Grid container spacing={2} alignItems='center' flexDirection='column'>
          <Grid item sx={{ margin: '40px' }}>
            {avatarFile ? (
              <Avatar sx={{ width: '150px', height: '150px' }} src={avatarFile} />
            ) : (
              <Avatar sx={{ width: '150px', height: '150px' }} />
            )}
          </Grid>
          <Grid item>
            <Button variant='contained' component='label'>
              {t('profile.changeBtn')}
              <input type='file' accept='image/*' hidden onChange={handleAvatarChange} />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography sx={{ marginTop: '20px', marginBottom: '20px' }} variant='h4'>
          {t('profile.EditProfile')}
        </Typography>
        <form noValidate autoComplete='off'>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                fullWidth
                id='firstName'
                label={t('profile.firstname')}
                defaultValue={firstName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                fullWidth
                id='username'
                label={t('profile.username')}
                defaultValue={username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                fullWidth
                id='newPassword'
                label={t('profile.newPassword')}
                type='password'
                value={newPassword}
                onChange={handleNewPasswordChange}
              />
            </Grid>
          </Grid>
        </form>
        <Button
          sx={{ marginTop: '20px' }}
          variant='contained'
          color='primary'
          onClick={handleSaveClick}
        >
          {t('profile.saveBtn')}
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProfilePage;
