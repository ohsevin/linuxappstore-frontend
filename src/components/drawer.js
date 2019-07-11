import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useTheme } from "@material-ui/styles";

const drawerWidth = 240;

const sources = [
    { id: 0, src: './icons/app_store.png', name: 'All' },
    { id: 1, src: './icons/appimage.png', name: 'AppImage' },
    { id: 2, src: './icons/flatpak.png', name: 'Flatpak' },
    { id: 3, src: './icons/snap.png', name: 'Snap' },
  ]

const styles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  toolbarRoot: {
    minWidth: "500px"
  },
  hide: {
    display: "none"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7 + 1),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9 + 1),
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
}));

export default () => {
  const classes = styles()
  const [open, setOpen] = React.useState(false)
  const [appType, setAppType] = React.useState(0)
  const theme = useTheme()

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function onSourceClick(index) {
      setAppType(sources[index].id)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar className={classes.toolbarRoot} disableGutters={!open}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" color="inherit" noWrap>
            App Store
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        open={open}
      >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>

          <Divider/>

          <List>

          {sources.map((item, index) =>
              <ListItem button style={{ backgroundColor: appType === index ? "rgba(0, 0, 0, 0.08)" : "" }} key={item.name} onClick={() => onSourceClick(index)}>
                <img className="icon" src={item.src} alt={item.name} style={{ width: 24, marginRight: 15 }} />
                <ListItemText primary={item.name} style={{ display: open ? '' : 'none' }}></ListItemText>
              </ListItem>
            )}

          </List>

      </Drawer>
    </div>
  );
};
