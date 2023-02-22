import { useStyles } from './styles';
import { Link, NavLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Avatar,
  FormControl,
  InputLabel,
  NativeSelect,
} from '@mui/material';
import { useAuth } from '../../utils/hook';
import { useTranslation } from 'react-i18next';
import '../../utils/i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setLanguage } from '../../store/slice/localization';

function TopBar() {
  const classes = useStyles();
  const auth = useAuth();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const language = useSelector((state: RootState) => state.language.language);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    dispatch(setLanguage(selectedLanguage));
  };

  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Container maxWidth='xl'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            <Box display='flex' flexDirection='row' columnGap='20px'>
              <NavLink
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'white' : 'rgba(255, 255, 255, 0.6)',
                })}
                to='/'
              >
                {t('header.home')}
              </NavLink>
              <NavLink
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'white' : 'rgba(255, 255, 255, 0.6)',
                })}
                to='news'
              >
                {t('header.news')}
              </NavLink>
            </Box>
          </Typography>
          <Box className={classes.languageBox}>
            <FormControl fullWidth>
              <InputLabel variant='standard' htmlFor='language' sx={{ color: '#FFFFF0' }}>
                {t('language')}
              </InputLabel>
              <NativeSelect
                onChange={handleLanguageChange}
                value={language}
                sx={{ color: '#c4c41f' }}
                inputProps={{
                  name: 'language',
                }}
              >
                <option value='en'>{t('English')}</option>
                <option value='ua'>{t('ukrainian')}</option>
              </NativeSelect>
            </FormControl>
          </Box>
          <Box className={classes.blockAvatar}>
            {auth ? (
              <Link to='profile'>
                <Avatar />
              </Link>
            ) : (
              <Link to='login'>
                <Typography variant='subtitle1' style={{ color: 'white' }}>
                  Login
                </Typography>
              </Link>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default TopBar;
