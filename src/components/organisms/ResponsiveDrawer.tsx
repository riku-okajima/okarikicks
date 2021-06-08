import Router from "next/router";
import React from "react";
import { createStyles, Divider, Drawer, Hidden, makeStyles, Theme, Toolbar, useTheme } from "@material-ui/core";
import MenuListItem, { MenuItem } from "../molecules/MenuListItem";
import HomeIcon from "@material-ui/icons/Home"
import ZoomOutMapIcon from "@material-ui/icons/ZoomOutMap"
import StarIcon from "@material-ui/icons/Star"
import HeightIcon from "@material-ui/icons/Height"
import AddIcon from "@material-ui/icons/Add"


const drawerWidth = 240;
const viewMenu: Array<MenuItem> = [
    {
        icon: <HomeIcon />,
        text: 'TOP',
        event: () => Router.push('/'),
    },
    {
        icon: <ZoomOutMapIcon />,
        text: 'Brand',
        event: () => Router.push('/brand'),
    },
    {
        icon: <StarIcon />,
        text: 'Rare',
        event: () => Router.push('/rare'),
    },
    {
        icon: <HeightIcon />,
        text: 'MySize',
        event: () => Router.push('/mysize'),
    },
];
const addMenu: Array<MenuItem> = [
    {
        icon: <AddIcon />,
        text: 'Add Kicks',
        event: () => Router.push('/addkicks'),
    },
];

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        drawerPaper: {
            width: drawerWidth,
        },
    })
);

interface Props {
    window?: () => Window;
    mobileOpen: boolean;
    handleDrawerToggle: () => void; 
}

const ResponsiveDrawer = (props: Props) => {
    const { window, mobileOpen,  handleDrawerToggle } = props;
    const classes = useStyles();
    const theme = useTheme();

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <MenuListItem menuItems={viewMenu} />
            <Divider />
            <MenuListItem menuItems={addMenu} />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <nav className={classes.drawer}>
            <Hidden xsUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
            </Hidden>
        </nav>
    );
};

export default React.memo(ResponsiveDrawer);