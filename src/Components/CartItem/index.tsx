import { FC, Fragment } from "react";
import useStyles from "./styles";
import { CartItem } from "./../../Types/store";
import { Grid, Typography, Divider, Container } from "@material-ui/core";
import { ColorPalette, CartOptions } from "..";
import { addCarItem, removeCarItem } from "../../Store/Slices/cart";
import { useAppDispatch } from "../../Store/store";

interface Props extends CartItem {}

const CartItemBox: FC<Props> = ({
  cartItemId,
  id,
  description,
  colors,
  price,
  children,
  quantity,
  imageUrl,
  title,
}) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const onAddBtn = () => {
    dispatch(
      addCarItem({
        imageUrl: imageUrl,
        price,
        colors: colors,
        description,
        id,
        title,
        cartItemId,
        quantity: 1,
      })
    );
  };
  const onRemove = () => {
    dispatch(removeCarItem(cartItemId));
  };
  return (
    <Fragment>
      <Container>
        <Grid container className={classes.cartItemWrapper}>
          <Grid item xs={6}>
            <img src={imageUrl} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle2">{title}</Typography>
            <ColorPalette
              colors={[colors]}
              overrideClass={classes.clrPalette}
            />
            <CartOptions
              price={price}
              varient="CART"
              qty={quantity}
              onClick={onAddBtn}
              onRemove={onRemove}
              overrideClass={classes.actionBtn}
              animationId={1243234}
            />
          </Grid>
        </Grid>
      </Container>
      <Divider />
    </Fragment>
  );
};

export default CartItemBox;
