import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import axios from '../../axios-orders';

class Orders extends Component {

    state = {
        orders: [],
        loading: true,
        error: false
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {
                const ordersArray = [];
                for (let key in response.data) {
                    ordersArray.push({
                        id: key,
                        ...response.data[key]
                    });
                }                
                this.setState({
                    orders: ordersArray,
                    loading: false
                });
            })
            .catch(error => {                
                this.setState({
                    loading: false,
                    error: true
                })
            });
    }

    render() {

        let orders = <Spinner />;

        if (this.state.orders) {
            orders = this.state.orders.map(order => {
                return (
                    <Order 
                        key={order.id} 
                        ingredients={order.ingredients}
                        price={order.price} />
                );
            });            
        } else {
            orders = <p>No orders to display.</p>;
        }

        return (
            <div>
                {orders}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);