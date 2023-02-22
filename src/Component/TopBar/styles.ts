import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
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
  selectNat: {},
}));

export const drawerWidth = 240;
