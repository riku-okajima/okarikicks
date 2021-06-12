import { createStyles, CssBaseline, makeStyles, Theme, Toolbar, Typography } from "@material-ui/core";
import React, { Fragment, ReactNode, useState } from "react";
import Head from 'next/head';
import Link from 'next/link'
import ResponsiveAppBar from "../organisms/ResponsiveAppBar";
import ResponsiveDrawer from "../organisms/ResponsiveDrawer";
import Copyright from "../molecules/Copyright";

// ReactNode ⇒ JSXが受け付ける全てのものをまとめたtype
// JSX ⇒ <> で描画するもの？
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
    // useCallback ⇒ メモ化されたコールバック関数を返す。(メモ化...同じ入力が再度発生した時にキャッシュした結果を返す)
    const handleDrawerToggle = React.useCallback(() => setMobileOpen(!mobileOpen), []);

    return (
        // Fragment ⇒ 不要なdivタグをなくす（　<>...</>と同じ）
        <Fragment>
            <Head>
                <title>{title}</title>
            </Head>
            <div className={classes.root} >
                {/* CssBaseline ⇒ ブラウザ間の表示差異をなくし、意図通りにスタイリングを行なう */}
                <CssBaseline />
                <ResponsiveAppBar handleDrawerToggle={handleDrawerToggle}/>
                <ResponsiveDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>
                <main className={classes.content}>
                    <Toolbar />
                    {children}
                    <Copyright />
                </main>
            </div>
        </Fragment>
    );
};

// propsが以前と変わっていない場合に再レンダリングが抑制される
export default React.memo(Layout);