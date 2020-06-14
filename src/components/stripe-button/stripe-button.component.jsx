import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
  console.log("PRICE", price)
  const priceForStripe = price * 100;
  const publicKey = "pk_test_51GtguDGR4zDtCVLIbylKK9ouUmJF7VMmIFzbj5CCdPlsj4GPMApelTH5TgkEXMD6eXQXl6cmyMZo2usbm3IWq8BX00VJwO5GpV";


  const onToken = token => {
    console.log(token);
    alert("Payment successful");
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      token={onToken}
      panelLabel="Pay Now"
      stripeKey={publicKey}
    >
    </StripeCheckout>
  )
}
export default StripeCheckoutButton;