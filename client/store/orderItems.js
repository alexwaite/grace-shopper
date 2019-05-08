import axios from 'axios';

//ACTION TYPES
const SET_ORDERITEMS = 'SET_ORDERITEMS';
// const ADD_ORDERITEM = 'ADD_ORDERITEM';
// const DELETE_ORDERITEM = 'DELETE_ORDERITEM';

//ACTION CREATORS
// const addOrderItem = (orderItem, userId) => ({
//   type: ADD_ORDERITEM,
//   orderItem,
//   userId
// });

// const deleteOrderItem = orderItemId => ({
//   type: DELETE_ORDERITEM,
//   orderItemId,
// })

//THUNK CREATORS

export const fetchOrderItems = orderId => {
	return dispatch => {
		return (
			axios
				.get(`/api/users/orders/${orderId}/orderItems`)
				// .then(resp => resp)
				.then(resp => {
					if (resp.data) {
						console.log('fetchOrderItems() being called');
						return dispatch(setOrderItems(resp.data));
					}
					return null;
				})
				.catch(err => {
					throw new Error(err);
				})
		);
	};
};

// TODO refactor: don't need orderId ?
export const deleteOrderItemThunk = (userId, orderId, orderItemId) => {
	return dispatch => {
		// TODO change on line below:  1 => ${userId}
		return axios
			.delete(`/api/users/1/orders/${orderId}/orderItem/${orderItemId}`)
			.then(() => {
				return dispatch(fetchOrderItems(orderId));
			})
			.catch(err => {
				throw new Error(err);
			});
	};
};

export const addOrderItemThunk = (userId, orderId, orderItem) => {
	return dispatch => {
		return axios
			.post(`/api/users/${userId}/orders/${orderId}/orderItem`, orderItem)
			.then(() => dispatch(fetchOrderItems(orderId)))
			.catch(err => {
				throw new Error(err);
			});
	};
};

//REDUCER

export const orderItems = (state = [], action) => {
	switch (action.type) {
		case SET_ORDERITEMS:
			return action.orderItems;
		default:
			return state;
	}
};