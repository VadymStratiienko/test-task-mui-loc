import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { deleteNewsById } from '../../store/thunk/post';
import { loadMore } from '../../store/slice/post';
import PostCard from '../../Component/Posts';
import LoadingProgress from '../../Component/loading-progress';
import { useStyles } from './styles';

const NewsPage: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const { t } = useTranslation();
  const { data, isLoading, error } = useAppSelector((state) => state.post);

  useEffect(() => {
    dispatch(loadMore());
  }, []);
  const handleLoadMore = () => {
    dispatch(loadMore());
  };
  const handleDeletePost = (id: number) => {
    dispatch(deleteNewsById(id));
  };

  return !data ? (
    <>{isLoading && <LoadingProgress />}</>
  ) : (
    <Box className={classes.wrapperNews}>
      {data?.map(({ title, body, id }, index) => {
        return (
          <PostCard
            key={index}
            id={id}
            title={title}
            body={body}
            handleDeletePost={handleDeletePost}
          />
        );
      })}
      {isLoading && <LoadingProgress />}
      {error && <Box>{error}</Box>}
      <Button
        variant='contained'
        color='primary'
        sx={{ marginBottom: '50px', marginLeft: 'auto', marginRight: 'auto' }}
        type='submit'
        onClick={handleLoadMore}
      >
        {t('post.add')}
      </Button>
    </Box>
  );
};

export default NewsPage;
