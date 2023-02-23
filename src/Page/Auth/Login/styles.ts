import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '10px',
  },
  textField: {
    margin: '10px',
  },
  button: {
    margin: '40px',
  },
}));
