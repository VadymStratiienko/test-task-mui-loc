import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(() => ({
  menuButton: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  blockAvatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  languageBox: {
    minWidth: 120,
    paddingRight: '20px',
  },
}));

export const drawerWidth = 240;
