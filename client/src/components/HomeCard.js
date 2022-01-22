import { Box, Paper, Typography, Button } from '@mui/material'
import React from 'react'

const HomeCard = ({ heading }) => {
    return (
        <Box sx={{
            bgcolor: 'secondary.main',
            minHeight: 100,
            borderRadius: 5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 4,
            my: 2,
            mx: 1,
            background: 'linear-gradient(125.56deg, rgba(255, 255, 255, 0.35) 16.45%, rgba(255, 255, 255, 0.2) 70.19%)', borderRadius: 3, backdropFilter: 'blur(10px)', boxShadow: '0px 4px 24px -1px rgba(0, 0, 0, 0.2)',
            borderImageSource: 'linear-gradient(119.63deg, #FFFFFF 17.47%, rgba(81, 143, 205, 0) 42.78%, rgba(81, 143, 205, 0) 68.49%, rgba(81, 143, 205, 0.49) 92.25%)',

            '&:hover': {
                transform: 'scale(1.05) ',
                transition: 'all 0.3s ease-in-out',
            }
        }}>
            <Box color="primary">
                <Typography sx={{ textTransform: 'uppercase', textAlign: 'center', fontWeight: 'bolder' }} variant="h2" color='common.white'>{heading}</Typography>
            </Box>

        </Box>
    )
}

export default HomeCard
