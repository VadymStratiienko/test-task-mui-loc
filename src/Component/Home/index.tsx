import React, { useEffect } from 'react';
import { Box, Card, CardContent, CardMedia, CircularProgress, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { useStyles } from './styles';
import { getProduct } from '../../store/thank/products';

const HomeComponent = () => {
  const dispatch = useAppDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const { product, isLoading } = useAppSelector((state) => state.product);

  return !product?.products ? (
    <>{isLoading && <CircularProgress disableShrink className={classes.loadingStyle} />}</>
  ) : (
    <Box className={classes.wrapperHome}>
      {product?.products.map((item) => {
        return (
          <Card className={classes.root} key={item.id}>
            <CardMedia className={classes.media} image={item.images[0]} title={item.title} />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {item.brand} {item.title}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
};

export default HomeComponent;
