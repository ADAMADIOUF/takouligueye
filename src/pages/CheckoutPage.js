import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  const{cart} = useCartContext()
  return (
    <main>
      <PageHero title='caisse' />
      <Wrapper className='page'>
        {cart.length < 1 ? (
          <div className='empty'>
            <h2>Votre panier est vide</h2>
            <Link to={`/products`}> remplis-le</Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.div``
export default CheckoutPage
