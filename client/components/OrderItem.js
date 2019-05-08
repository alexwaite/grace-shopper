import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteOrderItemThunk } from '../store/index';

class OrderItem extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		const { orderItem, product, userId, orderId } = this.props;
		const { price, quantity } = orderItem;
		console.log('orderItem: ', orderItem);
		// console.log('products: ', this.props.products);
		if (!orderItem.price) {
			orderItem.price = product.price;
		}

		const title = product ? product.title : '';
		const itemTotal = orderItem ? price * quantity : 0;
		return (
			<tr>
				<td>{title}</td>
				<td>{price}</td>
				<td>{quantity}</td>
				<td>{itemTotal}</td>
				<td>
					<button
						type="submit"
						onClick={() => this.props.deleteOrderItemThunk(userId, orderId, orderItem.id)}
					>
						X
          </button>
				</td>
			</tr>
		);
	}
}

const mapStateToProps = (state, { orderItem }) => {
	const { products } = state;
	const product = products.find(_product => _product.id === orderItem.productId);
	console.log('product: ', product);
	console.log('state: ', state);
	return {
		product,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		deleteOrderItemThunk: (userId, orderId, orderItemId) =>
			dispatch(deleteOrderItemThunk(userId, orderId, orderItemId)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(OrderItem);
