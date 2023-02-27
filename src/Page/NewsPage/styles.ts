import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(() => {
  return {
    wrapperNews: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      rowGap: '24px',
      width: '100%',
      margin: '0 auto',
    },
  };
});
