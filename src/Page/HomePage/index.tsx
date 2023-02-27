import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../utils/hook";
import { getProduct } from "../../store/thunk/products";
import CardProduct from "../../Component/CardProduct";
import LoadingProgress from "../../Component/loading-progress";
import { useStyles } from "./styles";

const HomeComponent = () => {
  const dispatch = useAppDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const { product, isLoading } = useAppSelector((state) => state.product);

  return !product?.products ? (
    <>{isLoading && (<LoadingProgress />) }</>
  ) : (
    <Box className={classes.wrapperHome}>
      {product?.products.map(({ id, images, brand, title, description, price }) => {
          return (
            <CardProduct
              key={id}
              id={id}
              images={images}
              brand={brand}
              title={title}
              description={description}
              price={price}           />
          );
      })}
    </Box>
  );
};

export default HomeComponent;
