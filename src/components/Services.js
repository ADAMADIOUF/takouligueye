import React from 'react'
import styled from 'styled-components'
import servicesImg from '../assets/services1.jpg'
import servicesImg2 from '../assets/services2.jpg'
import servicesImg3 from '../assets/services3.jpg'
import Reviews from './Reviews'

const Services = () => {
  return (
    <>
      <Wrapper>
        <div className='section-center'>
          <article className='header'>
            <h3>services</h3>
          </article>

          <div className='services-center'>
            <div className='container-services'>
              <article>
                <img src={servicesImg} alt='' />
              </article>
              <article>
                <img src={servicesImg2} alt='' />
              </article>
              <article>
                <img src={servicesImg3} alt='' />
              </article>
            </div>
          </div>
        </div>
      </Wrapper>
      <Reviews/>
    </>
  )
}

const Wrapper = styled.section`
  .header h3 {
    text-align: center;
    font-size: 2.5rem;
    color: #000;
  }
  .container-services img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 992px) {
    .container-services {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 5rem;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
export default Services
