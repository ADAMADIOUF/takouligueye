import React,{useState,useEffect} from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import styled from 'styled-components'
import data from "./dataReviews"
import BackTotop from './BackTotop'

const Reviews = () => {
 const[review,setReview] = useState(data)
 
 const[index,setIndex]= useState(0)
 useEffect(() => {
   const lastIndex = review.length - 1
   if (index < 0) {
     setIndex(lastIndex)
   }
   if (index > lastIndex) {
     setIndex(0)
   }
 }, [index, review])

 useEffect(() => {
   let slider = setInterval(() => {
     setIndex(index + 1)
   }, 5000)
   return () => {
     clearInterval(slider)
   }
 }, [index])
  return (
    <>
      <Wrapper>
        <section className='section'>
          <div className='title'>
            <h2>
              <span>/</span>Commentaires des clients
            </h2>
          </div>
          <div className='section-center'>
            {review.map((person, personIndex) => {
              const { id, image, name, desc } = person

              let position = 'nextSlide'
              if (personIndex === index) {
                position = 'activeSlide'
              }
              if (
                personIndex === index - 1 ||
                (index === 0 && personIndex === review.length - 1)
              ) {
                position = 'lastSlide'
              }

              return (
                <article className={position} key={id}>
                  <img src={image} alt={name} className='person-img' />
                  <h4>{name}</h4>

                  <p className='text'>{desc}</p>
                  <FaQuoteRight className='icon' />
                </article>
              )
            })}
            <button className='prev' onClick={() => setIndex(index - 1)}>
              <FiChevronLeft />
            </button>
            <button className='next' onClick={() => setIndex(index + 1)}>
              <FiChevronRight />
            </button>
          </div>
        </section>
      </Wrapper>
      <BackTotop/>
    </>
  )
}
const Wrapper = styled.section`
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .title h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
  }
  .title span {
    font-size: 0.85em;
    color: var(--clr-primary-5);
    margin-right: 1rem;
    font-weight: 700;
  }
  .section-center {
    margin: 0 auto;
    margin-top: 4rem;
    width: 80vw;
    height: 450px;
    max-width: 800px;
    text-align: center;
    position: relative;
    display: flex;
    overflow: hidden;
  }
  .person-img {
    border-radius: 50%;
    margin-bottom: 1rem;
    width: 150px;
    height: 150px;
    object-fit: cover;
    border: 4px solid var(--clr-grey-8);
    box-shadow: var(--dark-shadow);
  }
  article h4 {
    text-transform: uppercase;
    color: var(--clr-primary-5);
    margin-bottom: 0.25rem;
  }
  .title {
    text-transform: capitalize;
    margin-bottom: 0.75rem;
    color: var(--clr-grey-3);
  }
  .text {
    max-width: 35em;
    margin: 0 auto;
    margin-top: 2rem;
    line-height: 2;
    color: var(--clr-grey-5);
  }
  .icon {
    font-size: 3rem;
    margin-top: 1rem;
    color: var(--clr-primary-5);
  }
  .prev,
  .next {
    position: absolute;
    top: 200px;
    transform: translateY(-50%);
    background: #84cc16;
    color: var(--clr-white);
    width: 1.25rem;
    height: 1.25rem;
    display: grid;
    place-items: center;
    border-color: transparent;
    font-size: 1rem;
    border-radius: var(--radius);
    cursor: pointer;
    transition: var(--transition);
  }
  .prev:hover,
  .next:hover {
    background: #84cc16;
  }
  .prev {
    left: 0;
  }
  .next {
    right: 0;
  }
  @media (min-width: 800px) {
    .text {
      max-width: 45em;
    }
    .prev,
    .next {
      width: 2rem;
      height: 2rem;
      font-size: 1.5rem;
    }
  }
  article {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: var(--transition);
  }
  article.activeSlide {
    opacity: 1;
    transform: translateX(0);
  }
  article.lastSlide {
    transform: translateX(-100%);
  }
  article.nextSlide {
    transform: translateX(100%);
  }
`
export default Reviews