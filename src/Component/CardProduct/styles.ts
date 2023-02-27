import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(() => {
  return {
    loadingStyle: {
      position: 'fixed',
      left: '50%',
      top: '50%',
    },
    wrapperHome: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      rowGap: '24px',
      columnGap: '24px',
      margin: '0 auto',
    },
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  };
});
