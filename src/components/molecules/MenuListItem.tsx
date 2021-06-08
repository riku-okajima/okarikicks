import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from "react";

interface Props {
    menuItems: Array<MenuItem>;
}

export interface MenuItem {
    icon: React.ReactNode;
    text: string;
    event?: () => void;
}

export default function MenuListItem(props: Props) {
    const { menuItems } = props;

    return (
        <List>
            {menuItems.map(({ text, event, icon}) => (
                <ListItem button key={text} onClick={event}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={text}/>
                </ListItem>
            ))};
        </List>
    );
}