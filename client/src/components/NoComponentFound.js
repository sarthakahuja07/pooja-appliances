import { Button, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Img } from '../styles'



const NoComponentFound = ({ error, message }) => {
    const applianceState = useSelector(state => state.applianceState);
    const appliances = applianceState.appliances;
    return (
        <Container>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}>
                <Img sx={{height: ['auto', '300px', '300px','400px', '500px']}} src={process.env.PUBLIC_URL + '/assets/NotFound.svg'} alt="" />
                <Typography variant="h4" sx={{ textAlign:'center', textTransform: 'capitalize', fontWeight: 'bolder' }}>{error? error.message : message? message : "No resource found" }</Typography>
                <Link to={`/${appliances}`}>
                    <Button variant="contained" color="primary" size='large' sx={{ my: 3 }}>
                        Go to Home
                    </Button>
                </Link>
            </Box>
        </Container>
    )
}

export default NoComponentFound
