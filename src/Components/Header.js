import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Avatar, MenuItem, Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LanguageIcon from '@material-ui/icons/Language';
import { Sidebar } from './Sidebar';

const useStyles = makeStyles((theme) => ({
  root: {},
  appBar: {
    backgroundColor: 'white',
    color: 'black',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    },
    width: 'auto',
    maxWidth: '300px', // Limit the width of the search input
  },
  searchIcon: {
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  section: {
    display: 'flex',
    alignItems: 'center',
  },
  icons: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
  },
  avatarSection: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    marginLeft: theme.spacing(2),
  },
  drawer: {
    width: 250,
  },
  drawerPaper: {
    width: 240,
  },
}));

export const Header = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className={classes.root} style={{ marginBottom: "10px" }}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <div className={classes.section}>
            <Typography variant="h6" className={classes.title}>
              Logo
            </Typography>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          </div>
          <div className={classes.section} style={{ marginInline: '300px' }}>
            <div className={classes.search}>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div className='flex flex-row justify-evenly '>
              <div className='p-2'>Mega Menu</div>
              <div className='p-2'>Settings</div>
              <div className='p-2'>Projects</div>
            </div>
          </div>
          <div className={classes.section}>
            <div className={classes.icons}>
              <IconButton color="inherit">
                <NotificationsIcon />
              </IconButton>
              <IconButton color="inherit">
                <LanguageIcon />
              </IconButton>
            </div>
            <div className={classes.avatarSection}>
              <IconButton edge="end" color="inherit">
                <AccountCircle />
              </IconButton>
              <Avatar alt="Profile Photo" src="/static/images/avatar/1.jpg" />
              <MenuItem>Account</MenuItem>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <Sidebar/>
      </Drawer>
    </div>
  );
};
