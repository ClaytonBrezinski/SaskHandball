import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
	render() {
		return (
			<StripeCheckout
				style={{ width: '100%' }}
				amount={500}
				token={token => console.log(token)}
				stripeKey={process.env.REACT_APP_STRIPE_KEY}
			/>
		);
	}
}

export default Payments;
