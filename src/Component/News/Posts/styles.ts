import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  root: {
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
    position: "relative",
    right: 0,
    "&:hover": {
      color: 'red'
    }
  }
});
