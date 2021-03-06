import { Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CartItemForm from './CartItemForm';
import { removeItem } from '../../redux/cartSlice';


const SingleCartItem = ({ index }) => {

    const { app } = useParams()
    const cartState = useSelector(state => state.cartState);
    const cart = cartState[app];
    const item = cart.items[index];
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(removeItem({ ...item }))
    }

    return (
        <>

            <Grid container sx={{ borderBottom: '1px solid #ebebeb' }}>
                <Grid item xs={12} lg={5} >
                    <Card variant='' sx={{
                        paddingLeft: 3, py: [3], display: 'flex'
                    }}>
                        <Link to={`/${app}/products/${item._id}`} >
                            <CardMedia
                                sx={{ borderRadius: 1, width: 100, height: '100%' }}
                                component="img"
                                image={item.images[0].path}
                                alt="Live from space album cover"
                            >
                            </CardMedia>
                        </Link>
                        <Box sx={{ p: 2, display: 'flex', alignItems: 'start', justifyContent: 'space-between', flexDirection: 'column' }}>
                            <Link to={`../products/${item._id}`}>
                                <Typography gutterBottom variant="body1" fontWeight='normal' sx={{ my: 0, textTransform: 'capitalize' }} >
                                    {`${item.name} - ${item.color.name} (${item.size.val})`}
                                </Typography>
                            </Link>

                            <Typography variant="body1" color='text.primary' mt={1} fontWeight='bold'>₹{new Intl.NumberFormat('en-IN').format(item.size.price * item.unit.pcPerUnit)} </Typography>
                            <Button variant="outlined" color="error" sx={{ mt: 1 }} onClick={removeFromCart}>
                                Remove
                            </Button>
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={12} lg={7} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Grid container spacing={2} sx={{ paddingX: { xs: 3, lg: 0 }, mb: { xs: 2, lg: 0 } }}>
                        <Grid item xs={9} lg={9} >
                            <CartItemForm index={index} />
                        </Grid>
                        <Grid item xs={3} lg={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Box >
                                <Typography variant="h6" color="initial">₹{new Intl.NumberFormat('en-IN').format(item.quantity * item.size.price * item.unit.pcPerUnit)} </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </>
    )
}

export default SingleCartItem
