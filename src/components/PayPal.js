import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'
import { useNavigate } from 'react-router-dom'
function PayPal() {
  const navigate = useNavigate()
  const { myUser } = useUserContext()
  const { cart, total_amount, shipping_fee, clearCart } = useCartContext()
  return (
    <div>
      <h4>salut, {myUser && myUser.name}</h4>
      <PayPalScriptProvider
        options={{ 'client-id': process.env.REACT_APP_PAY_PAL_CLIENT_ID }}
      >
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    currency_code: 'USD',
                    value: total_amount + shipping_fee,
                  },
                },
              ],
            })
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then(function (details) {
              // This function shows a transaction success message to your buyer.
              alert('Transaction completed by ' + details.payer.name.given_name)
            })
            return
            setTimeout(() => {
              clearCart()
              navigate('/')
            }, 10000)
          }}
        />
      </PayPalScriptProvider>
    </div>
  )
}

export default PayPal
