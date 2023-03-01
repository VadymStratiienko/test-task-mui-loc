import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  root: {
    position: 'relative',
    minWidth: 275,
    margin: '10px',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  iconDel: {
    cursor: 'pointer',
    position: 'sticky',
    left: '98%',
    '&:hover': {
      color: 'red',
    },
  },
});
