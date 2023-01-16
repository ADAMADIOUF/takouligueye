import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import slide from "../components/dataSlider"

const Hero = () => {
  const [indexSlide, setIndexSlide] = useState(0)

  useEffect(() => {
    const lastIndex = slide.length - 1
    if (indexSlide < 0) {
      setIndexSlide(lastIndex)
    }
    if (indexSlide > lastIndex) {
      setIndexSlide(0)
    }
  })
  useEffect(() => {
    let slider = setInterval(() => {
      setIndexSlide(indexSlide + 1)
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  })
  return (
    <Wrapper className='section-center'>
      <div className='slide'>
        {slide.map((slide, slideIndex) => {
          let slider = 'nextSlide'
          if (slideIndex === indexSlide) {
            slider = 'activeSlide'
          }
          if (
            slideIndex === indexSlide - 1 ||
            (indexSlide === 0 && slideIndex === slide.length - 1)
          ) {
            slider = 'lastSlide'
          }
          const { id, name, title, image } = slide
          return (
            <div key={id}>
              <address className={slider}>
                <img src={image} alt='' className='img-slide' />
                <div className='slide-info'>
                  <div className='title'>
                    <p>{title}</p>
                  </div>
                  <div className='slide-desc'>
                    <h3>{name}</h3>
                    
                  </div>
                </div>
              </address>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  .slide {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    text-align: center;

    margin: 2rem auto;
  }
  .slide-info {
    position: absolute;
    top: 50%;
    left: 20%;
  }
  .slide-info h3 {
    color: var(--clr-black: #222);
    letter-spacing: var(--spacing);
    font-size: 2rem;
  }
  .slide-info p {
    font-size: 1rem;
    color: var(--clr-black: #222);
    
  }

  .next-slide {
    right: 0;
  }
  .prev-slide {
    left: 0;
  }
  address {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: var(--transition);
  }
  address.activeSlide {
    opacity: 1;
    transform: translateX(0);
  }
  address.lastSlide {
    transform: translateX(-100%);
  }
  address.nextSlide {
    transform: translateX(100%);
  }
  @media (min-width: 992px) {
    .img-slide {
      width: 100%;
      height: 100vh;
    }
    .slide {
      height: 700px;
    }
    .slide-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20rem;
      top: 30%;
      left: 5%;
    }
  }
`

export default Hero
