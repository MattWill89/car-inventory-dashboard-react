import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function ButtonAppBar({signedInUser, onSignOut}) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Car Dealership
                    </Typography>
                    { !signedInUser.username ? (
                        <>
                            <Link to="/signin" style={{color: "white"}}>
                                <Button color="inherit">Sign In</Button>
                            </Link>
                            <Link to="/signup" style={{color: "white"}}>
                                <Button color="inherit">Sign Up</Button>
                            </Link>
                        </>
                    ) : (
                        <Button color="inherit" onClick={onSignOut}>Sign Out</Button>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}