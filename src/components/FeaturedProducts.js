import React from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'

const FeaturedProducts = () => {
  const{products_loading:loading,products_error:error,featured_products:featured}= useProductsContext()

  if(loading){
    return(
      <Loading/>
    )
  }
  if (error) {
    return <Error />
  }
  return (
    <Wrapper className='section'>
      <div className='title'>
        <h2>Produits populaires</h2>
        
      </div>
      <div className=' section-center featured'>
        {featured.slice(0, 6).map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </div>
      <Link to={`/products`} className='btn-products'>
        tous les produits
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: #fff;
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn-products {
display:flex;
justify-content:center;
align-item:center;
    margin: 0 auto;
    text-align: center;
    font-size: 1rem;
    color: #fff;
    background: #000;
    text-transform: uppercase;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default FeaturedProducts
