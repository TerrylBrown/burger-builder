import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const buildControls = props => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(item => (
            <BuildControl 
                key={item.label} 
                label={item.label}
                added={() => props.ingredientAdded(item.type)}
                removed={() => props.ingredientRemoved(item.type)}
                disabled={props.disabled[item.type]} />
        ))}
        <button 
            className={classes.OrderButton} 
            onClick={props.ordered}
            disabled={!props.purchaseable}>
            Order Now
        </button>
    </div>
);

export default buildControls;