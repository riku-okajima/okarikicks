import { Typography } from "@material-ui/core";
import Link from 'next/link';
import React from "react";

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright ©︎ "}
            {/* <Link　href="/">
                Okarikicks
            </Link>{" "} */}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    )
}

export default React.memo(Copyright);