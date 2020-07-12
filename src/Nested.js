import './App.css';
import {List} from '@material-ui/core';
import {ListItem} from '@material-ui/core';
import {ListItemText} from '@material-ui/core';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from '@material-ui/core/Collapse';
import Divider from "@material-ui/core/Divider";
import styled from "styled-components";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {ListItemIcon} from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';

const Container = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
`;

function Nested() {

    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
        nested2: {
            paddingLeft: theme.spacing(8),
        },
        nested3: {
            paddingLeft: theme.spacing(12),
        },
        nested4: {
            paddingLeft: theme.spacing(16),
        }
    }));

    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.nested}
            >
                <ListItem button>
                    <ListItemText primary="Bacon & eggs"/>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <ListItemText primary="Hamburger"/>
                </ListItem>
                <Divider/>
                <ListItem button onClick={handleClick}>
                    <ListItemText primary="English breakfast"/>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Divider/>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding className={classes.root}>
                        <ListItem button className={classes.nested} onClick={handleClick}>
                            <ListItemText primary="Fried eggs"/>
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested2}>
                                    <ListItemText primary="Fried eggs"/>
                                </ListItem>
                                <Collapse in={open} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItem button className={classes.nested3}>
                                            <ListItemText primary="Fried eggs"/>
                                        </ListItem>
                                        <ListItem button className={classes.nested3}>
                                            <ListItemText primary="Mushrooms"/>
                                        </ListItem>
                                    </List>
                                </Collapse>
                                <ListItem button className={classes.nested2}>
                                    <ListItemText primary="Mushrooms"/>
                                </ListItem>
                            </List>
                        </Collapse>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Mushrooms"/>
                        </ListItem>
                    </List>
                </Collapse>
            </List>
    );
}

export default Nested;
