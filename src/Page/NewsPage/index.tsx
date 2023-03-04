import React, { FC, useCallback, useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { deleteNewsById } from '../../store/thunk/post';
import { loadMore } from '../../store/slice/post';
import PostCard from '../../Component/Posts';
import LoadingProgress from '../../Component/Loading-Progress';
import AppLoadingButton from "../../Component/Loading-Button";
import { MAX_POSTS } from "../../utils/costants";
import { useStyles } from './styles';




const NewsPage: FC = (): JSX.Element => {
  const [disabled, setDisabled] = useState(false);
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const { t } = useTranslation();
  const { data, isLoading, error, hasNextPage } = useAppSelector((state) => state.post);

  useEffect(() => {
    dispatch(loadMore());
  }, []);

  const handleLoadMore = useCallback(() => {
    if (hasNextPage) {
      dispatch(loadMore());
    }
    setDisabled(true);
  }, [dispatch, hasNextPage]);

  const handleDeletePost = useCallback((id: number) => {
    dispatch(deleteNewsById(id));
  }, [dispatch]);

  useEffect(() => {
    setDisabled(data.length >= MAX_POSTS);
  }, [data]);
  console.log(data.length);
  return (
    <Box className={classes.wrapperNews}>
      {data && data.map(({ title, body, id }, index) => (
        <PostCard
          key={index}
          id={id}
          title={title}
          body={body}
          handleDeletePost={handleDeletePost}
        />
      ))}
      {isLoading && <LoadingProgress />}
      {error && <Box>{error}</Box>}
      <AppLoadingButton
        variant="contained"
        color="primary"
        sx={{ marginBottom: "50px", marginLeft: "auto", marginRight: "auto" }}
        type="submit"
        onClick={handleLoadMore}
        loading={isLoading}
        disabled={disabled}
      >
        {t("post.add")}
      </AppLoadingButton>
    </Box>
  );
};

export default NewsPage;