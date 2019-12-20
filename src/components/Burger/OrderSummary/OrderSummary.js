import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // componentDidUpdate() {
    //     console.log('[Order Summary Will Update]');
    // }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>
                );
            });

        return (
            <Aux>
                <h3>Your Order</h3>            
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>            
                <Button 
                    btnType="Danger"
                    clicked={this.props.cancelOrder}>
                    Cancel
                </Button>            
                <Button
                    btnType="Success"
                    clicked={this.props.continueOrder}>
                    Continue
                </Button>
            </Aux>
        );
    }
};

export default OrderSummary;