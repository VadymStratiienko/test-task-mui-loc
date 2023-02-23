import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(() => {
  return {
    loadingStyle: {
      position: 'fixed',
      left: '50%',
      top: '50%',
    },
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
