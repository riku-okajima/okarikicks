import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React, { useState } from "react";
import theme from "../../styles/theme";

const drawerfWidth = 240;

interface Props {
    window?: () => Window;
    mobileOpen: boolean;
    handleDrawerToggle: () => void; 
}

const useStyle = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerfWidth,
                flexShrink: 0,
            },
        },
        drawerPaper: {
            width: drawerfWidth,
        },
    })
);


const ResponsiveDrawer = (props: Props) => {
    const { window, mobileOpen,  handleDrawerToggle } = props;
    const classes = useStyle();
    return (
        <></>
    )
}

export default React.memo(ResponsiveDrawer);