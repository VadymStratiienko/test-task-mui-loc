import React, { FC } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { IPostCard } from '../../common/types/post';
import { useStyles } from './styles';

const PostCard: FC<IPostCard> = (props) => {
  const { id, title, body, handleDeletePost } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <ClearIcon
        className={classes.iconDel}
        color='primary'
        onClick={() => handleDeletePost(id)}
      />
      <CardContent>
        <Typography className={classes.title} color='textSecondary' fontWeight={700} gutterBottom>
          {title[0].toUpperCase() + title.substring(1)}
        </Typography>
        <Typography variant='body2' component='p'>
          {body[0].toUpperCase() + body.substring(1)}.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
