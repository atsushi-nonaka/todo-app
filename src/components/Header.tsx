import React from 'react'
import { NavLink } from 'react-router-dom'
import { 
    AppBar, 
    createStyles, 
    IconButton, 
    makeStyles,
    Theme, 
    Toolbar, 
    Typography 
} from '@material-ui/core'

import MenuIcon from "@material-ui/icons/Menu";
import { SortTodo } from './SortTodo';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        header_menus: {
            display: 'flex'
        }
    })
);


export const Header: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} color='inherit' variant='h6'>
                        TODO-APP
                    </Typography>

                    <SortTodo />

                    <NavLink to='/' activeClassName='is-active' exact>Dashboard</NavLink>
                    <NavLink to='/registration' activeClassName='is-active'>Registration</NavLink>
                </Toolbar>
            </AppBar>
        </div>
    )
}
