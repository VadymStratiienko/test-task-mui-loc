import React, { FC } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useStyles } from './styles';
import { IPostCard } from '../../../common/types/post';
import AppLoadingButton from '../../loading-button';
import { useTranslation } from 'react-i18next';

const PostCard: FC<IPostCard> = (props) => {
  const { id, title, body, handleDeletePost, loading } = props;
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Card className={classes.root}>
      <AppLoadingButton
        variant='contained'
        color='primary'
        loading={loading}
        type='submit'
        onClick={() => handleDeletePost(id)}
      >
        {t('post.del')}
      </AppLoadingButton>
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
