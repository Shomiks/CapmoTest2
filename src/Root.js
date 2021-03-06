import './App.css';
import {List, ListItem} from '@material-ui/core';
import {ListItemText} from '@material-ui/core';
import React, {useState} from 'react';
import Collapse from '@material-ui/core/Collapse';
import Divider from "@material-ui/core/Divider";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {useStyles} from './App';
import styled from "styled-components";

const StyledRoot = styled(ListItem)`
    background: ${props => props.asd ? 'red' : 'default'};
`;

function Root(component) {
    const classes = useStyles();
    const [open, setOpen] = useState(true);

    const handleClick = () => setOpen(!open);
    const id = String(component.id).split("").join('.');

    return <>
      <List key={component.id + component.name + component.level} className={component.level === 0 ? classes.root : classes.nested}>
            <StyledRoot asd={component.asd[0] && component.name === component.asd[0].name} button onClick={handleClick} id={component.id} >
                <ListItemText primary={id + " " + component.name}/>
                {component.nested && (open ? <ExpandLess/> : <ExpandMore/>)}
            </StyledRoot>
            <Divider light={component.level !== 0}/>
            {component.nested && <Collapse in={open} timeout="auto" unmountOnExit>
                {component.nested.map(component=><Root {...component}
                                                  asd={component === component.asd}
                                                  key={component.level + component.name + component.id} />)}
            </Collapse>}
            </List>
        </>
}

export default Root;