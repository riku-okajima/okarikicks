import { createStyles, CssBaseline, makeStyles, Theme, Toolbar } from "@material-ui/core";
import React, { Fragment, ReactNode, useState } from "react";
import Head from 'next/head';
import ResponsiveAppBar from "../organisms/ResponsiveAppBar";
import ResponsiveDrawer from "../organisms/ResponsiveDrawer";

type Props = {
    children?: ReactNode;
    title?: string;
}

const useStyles = makeStyles(( theme: Theme ) => 
    createStyles({
        root: {
            display: 'flex',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    })
);

const Layout = ({ children, title = 'This is the default title'}: Props) => {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = React.useCallback(() => setMobileOpen(!mobileOpen), []);

    return (
        <Fragment>
            <Head>
                <title>{title}</title>
            </Head>
            <div className={classes.root} >
                <CssBaseline />
                <ResponsiveAppBar handleDrawerToggle={handleDrawerToggle}/>
                <ResponsiveDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>
                <main className={classes.content}>
                    <Toolbar />
                    {children}
                </main>
            </div>
        </Fragment>
    );
};

export default React.memo(Layout);