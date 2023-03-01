import React, { FC } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useStyles } from './styles';
import { IProductObj } from '../../common/types/product';

const CardProduct: FC<IProductObj> = (props: IProductObj): JSX.Element => {
  const { id, images, title, brand, description, price } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root} key={id}>
      <CardMedia className={classes.media} image={images[0]} title={title} />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          rowGap: 1,
        }}
      >
        <Typography gutterBottom variant='h5' component='h2'>
          {brand} {title}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          {description}
        </Typography>
        <Typography variant='body1' color='primary' component='p'>
          {price}$
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardProduct;
