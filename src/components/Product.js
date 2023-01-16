import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Product = ({image,name,id,price}) => {
  return (
    <Wrapper>
      <div className='container'>
        <img src={image} alt='' className='img-product' />
        <Link to={`/products/${id}`} className='link'>
          <h3>{name}</h3>
        </Link>
      </div>
      <footer className='footer-products'>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    color: #fff;
    background: #000;
    width: 12rem;
    height: 7rem;
    clip-path: polygon(
      0% 20%,
      60% 20%,
      60% 20%,
      100% 50%,
      64% 79%,
      60% 80%,
      0% 80%
    );
  }
  .link h3{
    font-size:1rem;
  }
  .container:hover img {
    opacity: 0.5;
    cursor: pointer;
  }
  .container:hover .link {
    opacity: 1;
  }
`
export default Product
